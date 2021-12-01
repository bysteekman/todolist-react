import React from "react";
import { useState } from "react/cjs/react.development";
import { NavLink } from "react-router-dom";

const List = (props) => {
    return (
        <li><NavLink to={`/todo-list/${props.todoList.id}`}>{props.todoList.title} ({props.count})</NavLink></li>
    )
}

export default List;