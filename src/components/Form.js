import React from "react";

const Form = () => {
    return (
        <form name="task">
            <input type="text" name="title" placeholder="task name" />
            <input type="text" name="description" placeholder="description" />
            <input type="date" name="dueDate" placeholder="deadline" min="2021-01-01" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default Form;