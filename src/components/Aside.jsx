import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "./List";

const Aside = (props) => {

    const changeActiveList = id => {
        props.onClick(id)
    }

    return (
        <aside className="task_list">
            <h1><Link to="today">Todo Lists</Link></h1>
            <ul>
                {
                    props.todoLists.map(list => <List key={list.id.toString()} todoList={list} onClick={changeActiveList} />)
                }
            </ul>
            <h3>Get All Task</h3>
        </aside>
    )
}

export default Aside;