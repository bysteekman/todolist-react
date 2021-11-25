import React from "react";
import { useState } from "react/cjs/react.development";

const createTask = (listId, task) => {
    return fetch(`https://localhost:5001/api/lists/${listId}/tasks`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(response => response.ok ? response.json() : alert('error'))
}
const Form = (props) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        dueDate: ''
    })

    const onSubmitHandler = event => {
        event.preventDefault();
        createTask(props.listId, form)
            .then(res => res != null ? props.onSubmit(res) : setForm([]));
    }

    const onChange = (e) => {
        form[e.target.name] = e.target.value
    }


    
    return (
        <form name="task" onSubmit={onSubmitHandler}>
            <input type="text" name="title" placeholder="task name" required onChange={onChange}/>
            <input type="text" name="description" placeholder="description" onChange={onChange}/>
            <input type="date" name="dueDate" placeholder="deadline" min="2021-01-01" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" onChange={onChange}/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default Form;