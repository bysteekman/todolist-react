import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const TodoItem = (props) => {
    const [task, setTask] = useState([])

    useEffect(() => {
        setTask(props.item)
    }, [])
    
    const deleteTask = () => {
        
    }
    return (
        <section className="task">
            <p>
                <input type="checkbox" name="itemCheckbox" /> 
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