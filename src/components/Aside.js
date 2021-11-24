import React, { useState } from "react";
import List from "./List";

const Aside = (props) => {
    return (
        <aside className="task_list">
            <h1>Todo Lists</h1>
            <ul>
                {
                    props.todoLists.map(list => <List key={list.id} todoList={list.title}/>)
                }
            </ul>
            <h3>Get All Task</h3>
        </aside>
    )
}

export default Aside;