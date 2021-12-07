import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from 'yup';

const InputForm = (props) => {

    const validationSchema = yup.object().shape({
        title: yup.string()
            .min(4, 'Min title length 4 characters')
            .required('Required field'),
        description: yup.string()
            .min(5, 'Min description length 5 characters'),
        dueDate: yup.date()
    })

    return (
        <Formik 
            initialValues={{ title: "", description: "", dueDate: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
                props.onSubmit(values);
                resetForm()
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className="input-part">
                        <Field type="text" name="title" placeholder="task name" />
                        {errors.title && touched.title ? (<p className="inputError">{errors.title}</p>) : null}
                    </div>
                    <div className="input-part">
                        <Field type="text" name="description" placeholder="description"/>
                        {errors.description && touched.description ? (<p className="inputError">{errors.description}</p>) : null}
                    </div>
                    <Field type="date" name="dueDate" placeholder="deadline" min="2021-01-01" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                    <button type="submit">Add Task</button>
                </Form>
            )}
        </Formik>
    )
}

export default InputForm;