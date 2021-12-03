import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from 'yup';

const InputForm = (props) => {

    const validationSchema = yup.object().shape({
        title: yup.string(),
        description: yup.string(),
        dueDate: yup.date().default(_ => {
            let now = new Date();
            now.setMonth(now.getMonth() + 1);
            return now;})
    })

    const onSubmitHandler = values => e => {
        e.preventDefault();
        props.onSubmit(values);
        e.target.reset();
    }

    return (
        <Formik 
            initialValues={{ title: "", description: "", dueDate: "" }}
            validation={validationSchema}
            onSubmit={onSubmitHandler}
        >
            <Form>
                <Field type="text" value={values.title} onChange={handleChange} name="title" placeholder="task name" required/>
                <Field type="text" value={values.description} onChange={handleChange} name="description" placeholder="description"/>
                <Field type="date" value={values.dueDate} onChange={handleChange} name="dueDate" placeholder="deadline" min="2021-01-01" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                <button type="submit">Add Task</button>
            </Form>
        </Formik>
    )
}

export default InputForm;