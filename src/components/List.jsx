import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

const List = (props) => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        setTodoList(props.todoList)
    }, [])

    // const changeActiveList = () => {
    //     props.onClick(todoList.id)
    // }
    return (
        <li><Link to={`/todo-list/${todoList.id}`}>{todoList.title} ({todoList.notCompletedTasksCount})</Link></li>
    )
}

export default List;