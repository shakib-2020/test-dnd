import React, { useEffect, useState } from "react";

import { useDrop } from "react-dnd";

import List from "./List";
import MenuItem from "./MenuItem";
import MenuItem2 from "./MenuItem2";

const itemList = [
  {
    id: 1,
    name: "menu-1",
  },
  {
    id: 2,
    name: "menu-2",
  },
  {
    id: 3,
    name: "menu-3",
  },
  {
    id: 4,
    name: "menu-4",
  },
];

const listItemChild = [
  {
    id: 1,
    name: "submenu-1",
  },
  {
    id: 2,
    name: "submenu-2",
  },
  {
    id: 3,
    name: "submenu-3",
  },
];

function Board() {
  const [menu, setMenu] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "listItem",
    drop: (item) => addItemToBoard(item.id, item.name, item.child),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToBoard = (id, name, child) => {
    setMenu((prevValue) => [
      ...prevValue,
      {
        id: id,
        name: name,
        child: child,
      },
    ]);
  };

  const getChild = (pId, id, name, child) => {
    const parent = menu.filter((item) => item.id === pId);
    parent[0].child.push({
      id,
      name,
      child,
    });
    setMenu((prevValue) => [...prevValue]);
  };

  return (
    <>
      {/* menu */}
      <div className="menu">
        <h2 className="title">Menu</h2>
        <ul>
          {menu.map((item) => {
            return (
              <MenuItem2
                key={item.id}
                id={item.id}
                name={item.name}
                child={item.child}
                getChild={getChild}
              />
            );
          })}
        </ul>
      </div>

      {/* board area */}
      <div className="board-area">
        {/* item list */}
        <div className="item-list">
          <h2 className="title">Main-menu item</h2>
          <ul>
            {itemList.map((item) => {
              return <List key={item.id} name={item.name} />;
            })}
          </ul>
        </div>
        <div className="item-list">
          <h2 className="title">Sub-menu item</h2>
          <ul>
            {listItemChild.map((item) => {
              return <List key={item.id} name={item.name} pass={"listChild"} />;
            })}
          </ul>
        </div>
        {/* board */}
        <div className="board" ref={drop}>
          <h2 className="title">Menu maker</h2>
          <ul>
            {menu.map((item) => {
              return (
                <MenuItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  child={item.child}
                  getChild={getChild}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Board;
