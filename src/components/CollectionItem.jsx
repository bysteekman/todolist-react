import React from "react";
import { Link } from "react-router-dom";

const CollectionItem = (props) => {
    const task = props.item;

    let today = new Date();
    const validDate = task.dueDate != null ? new Date(task.dueDate) : '';
    const corrDateOutput = typeof validDate !== 'string' ? `${validDate.getMonth()}.${validDate.getDate()}` : '';
    const expiredDate = (typeof validDate !== 'string' && validDate < today.setDate(today.getDate()-1)) ? 'expired' : '';

    const changeStatus = () => {
        task.done = !task.done;
        props.onUpdate(task.list.id, {id: task.id, done: task.done});
    }

    const deleteTask = () => {
        props.onDelete(task.list.id, {id: task.id, done: task.done})
    }

    return (
        <section className="task">
            <p>
                <input type="checkbox" name="itemCheckbox" onChange={changeStatus}/> 
                <em className="task_status">{task.title}</em>
                <em className={`date ${expiredDate}`}>{corrDateOutput}</em>
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