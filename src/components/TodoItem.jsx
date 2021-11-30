import React from "react";
import { useState } from "react/cjs/react.development";

const TodoItem = (props) => {
    const [task, setTask] = useState(props.item)
    let today = new Date()
    const validDate = task.dueDate != null ? new Date(task.dueDate) : '';
    const corrDateOutput = typeof validDate !== 'string' ? `${validDate.getMonth()}.${validDate.getDate()}` : '';
    const expiredDate = (typeof validDate !== 'string' && validDate < today.setDate(today.getDate()-1)) ? 'expired' : '';
    
    const changeStatus = () => {
        let newDone = !task.done;
        setTask({...task, done: newDone})
        props.onChange(task.id, newDone);
    }

    const deleteTask = () => {
        props.onDelete(task.id)
    }

    
    const taskStatus = task.done;

    return (
        <section className="task">
            <p>
                <input type="checkbox" name="itemCheckbox" onChange={changeStatus} defaultChecked={taskStatus}/> 
                <em className="task_status">{task.title}</em>
                <em className={`date ${expiredDate}`}>{corrDateOutput}</em>
            </p>
            <p className="task_description">
                {task.description}
            </p>
            <span onClick={deleteTask}></span>
        </section>
    )
}

export default TodoItem;