import React from "react";
import { useState } from "react/cjs/react.development";
import { NavLink } from "react-router-dom";

const List = (props) => {
    const [todoList, setTodoList] = useState(props.todoList);

    return (
        <li><NavLink to={`/todo-list/${todoList.id}`}>{todoList.title} ({props.count})</NavLink></li>
    )
}

export default List;