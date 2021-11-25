import React from "react";
import { useState } from "react/cjs/react.development";

const List = (props) => {
    // const [todoList, setTodoList] = useState([props.todoList])
    const changeActiveList = event => {
        return event.target.id;
    }
    return (
        <li id={props.todoList.id.toString()} onClick={changeActiveList}>{props.todoList.title}</li>
    )
}

export default List;