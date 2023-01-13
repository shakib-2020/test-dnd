import React from "react";
import { useDrag } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

function List({ name, pass }) {
  let listType;
  if (pass) {
    listType = "child";
  } else {
    listType = "listItem";
  }
  // drag
  const [{ isDragging }, drag] = useDrag(() => ({
    type: listType,
    item: {
      id: uuidv4(),
      name: name,
      child: [],
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return <li ref={drag}>{name}</li>;
}

export default List;
