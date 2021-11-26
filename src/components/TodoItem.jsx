import React from "react";
import { useState } from "react/cjs/react.development";

const TodoItem = (props) => {
    const [task, setTask] = useState(props.item)
    
    const changeStatus = () => {
        let newDone = !task.done;
        setTask({...task, done: newDone})
        props.onChange(task.id, newDone);
    }

    const deleteTask = () => {
        props.onClick(task.id)
    }

    const taskStatus = task.done;

    return (
        <section className="task">
            <p>
                <input type="checkbox" name="itemCheckbox" onChange={changeStatus} defaultChecked={taskStatus}/> 
                <em className="task_status">{task.title}</em>
                <em className="date">{task.dueDate}</em>
            </p>
            <p className="task_description">
                {task.description}
            </p>
            <span onClick={deleteTask}></span>
        </section>
    )
}

export default TodoItem;