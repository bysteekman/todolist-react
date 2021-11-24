import React from "react";

const TodoItem = (props) => {
    return (
        <section className="task">
            <p>
                <em className="task_status">{props.item.title}</em>
                <em className="date">{props.item.dueDate}</em>
            </p>
            <p className="task_description">
                {props.item.description}
            </p>
            <span></span>
        </section>
    )
}

export default TodoItem;