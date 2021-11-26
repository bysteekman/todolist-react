import React, { useState } from "react";
import List from "./List";

const Aside = (props) => {

    const changeActiveList = id => {
        props.onClick(id)
    }

    return (
        <aside className="task_list">
            <h1>Todo Lists</h1>
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