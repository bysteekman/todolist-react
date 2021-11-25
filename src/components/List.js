import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const List = (props) => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        setTodoList(props.todoList)
    }, [])

    const changeActiveList = () => {
        props.onClick(todoList.id)
    }
    return (
        <li onClick={changeActiveList}>{todoList.title}</li>
    )
}

export default List;