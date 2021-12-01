import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import List from "./List";

const Aside = () => {
    const lists = useSelector(state => state.dashboard.lists);
    const count = useSelector(state => state.dashboard.openedTasks);
    const today = useSelector(state => state.dashboard.today);

    const getTasksCountById = (id) => Object.values(count.find(l=> l[id]))

    return (
        <aside className="task_list">
            <h1><Link to="today">{`Tasks For Today (${today})`}</Link></h1>
            <ul>
                {
                    lists.map(list => <List key={list.id.toString()} todoList={list} count={getTasksCountById(list.id)}/>)
                }
            </ul>
        </aside>
    )
}

export default Aside;