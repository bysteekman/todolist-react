import React from "react";
import { Link } from "react-router-dom";
import List from "./List";

const Aside = (props) => {

    const getTasksCountById = (id) => Object.values(props.listsCount.find(l=> l[id]))

    return (
        <aside className="task_list">
            <h1><Link to="today">Todo Lists</Link></h1>
            <ul>
                {
                    props.todoLists.map(list => <List key={list.id.toString()} todoList={list} count={getTasksCountById(list.id)}/>)
                }
            </ul>
        </aside>
    )
}

export default Aside;