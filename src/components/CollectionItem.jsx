import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

const CollectionItem = (props) => {
    const [list, setList] = useState([])
    const [task, setTask] = useState([])

    useEffect(() => {
        setList(props.item.list)
        setTask(props.item)
    }, [])
    
    const changeStatus = () => {
        task.done = task.done ? false : true;
        props.onClick(['change', task.id, task.done]);
    }

    const deleteTask = () => {
        props.onClick(['delete', task.id])
    }

    console.log(task)
    return (
        <section className="task">
            <p>
                <input type="checkbox" name="itemCheckbox" onClick={changeStatus}/> 
                <em className="task_status">{task.title}</em>
                <em className="date">{task.dueDate}</em>
            </p>
            <p className="task_description">
                {task.description}
            </p>
            <Link to={`/todo-list/${list.id}`}>{list.title}</Link>
            <span onClick={deleteTask}></span>
        </section>
    )
}

export default CollectionItem;