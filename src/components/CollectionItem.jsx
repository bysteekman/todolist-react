import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

const CollectionItem = (props) => {
    const [task, setTask] = useState(props.item)

    const changeStatus = () => {
        let newDone = !task.done;
        setTask({...task, done: newDone})
        props.onChange(task.id, newDone, task.list.id);
    }

    const deleteTask = () => {
        props.onClick(task.id, task.list.id)
    }

    return (
        <section className="task">
            <p>
                <input type="checkbox" name="itemCheckbox" onChange={changeStatus}/> 
                <em className="task_status">{task.title}</em>
                <em className="date">{task.dueDate}</em>
            </p>
            <p className="task_description">
                {task.description}
            </p>
            <Link to={`/todo-list/${task.list.id}`}>{task.list.title}</Link>
            <span onClick={deleteTask}></span>
        </section>
    )
}

export default CollectionItem;