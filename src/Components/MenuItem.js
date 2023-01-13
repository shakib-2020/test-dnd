import React from "react";
import { useDrop } from "react-dnd";

function MenuItem({ id, name, child, getChild }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "child",
    drop: (item) => getChild(id, item.id, item.name, item.child),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  console.log(child);

  return (
    <li ref={drop}>
      {name}
      <ul>
        {child.length > 0 &&
          child.map((item) => {
            return (
              <li key={item.id}>
                <a>{item.name}</a>
              </li>
            );
          })}
      </ul>
    </li>
  );
}

export default MenuItem;
