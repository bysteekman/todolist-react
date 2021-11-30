import React from "react";
import { useState } from "react/cjs/react.development";

const Form = (props) => {

    const [form, setForm] = useState({})

    const onSubmitHandler = event => {
        event.preventDefault();
        props.onSubmit(form);
        setForm({});
        event.target.reset();
    }

    const onChange = (e) => {
        let name = e.target.name;
        setForm({...form, [name]: e.target.value})
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