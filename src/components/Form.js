import React from "react";
import { Component } from "react";
import { useState } from "react/cjs/react.development";

const Form = (props) => {
    const [form, setForm] = useState({lastId: 4})

    const onSubmitHandler = event => {
        event.preventDefault();
        form.lastId++;
        props.onSubmit(form)
    }


    
    return (
        <form name="task" onSubmit={onSubmitHandler}>
            <input type="text" name="title" placeholder="task name" required onChange={(event) => setForm({...form, title: event.target.value})}/>
            <input type="text" name="description" placeholder="description" onChange={(event) => setForm({...form, description: event.target.value})}/>
            <input type="date" name="dueDate" placeholder="deadline" min="2021-01-01" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" onChange={(event) => setForm({...form, dueDate: event.target.value})}/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default Form;