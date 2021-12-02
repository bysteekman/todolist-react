import React from "react";
import { NavLink } from "react-router-dom";

const List = (props) => {
    return (
        <li><NavLink to={`/todo-list/${props.todoList.id}`}>{props.todoList.title} ({props.count})</NavLink></li>
    )
}

export default List;