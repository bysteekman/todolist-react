import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import List from "./List";

const getTasksCountById = (id, count) => count[id];

const Aside = () => {
    const lists = useSelector(state => state.dashboard.lists);
    const count = useSelector(state => state.dashboard.openedTasks);
    const today = useSelector(state => state.dashboard.today);

    return (
        <aside className="task_list">
            <h1><Link to="today">{`Tasks For Today (${today})`}</Link></h1>
            <ul>
                {
                    lists.map(list => <List key={list.id.toString()} todoList={list} count={getTasksCountById(list.id, count)}/>)
                }
            </ul>
        </aside>
    )
}

export default Aside;