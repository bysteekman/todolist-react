import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useActionCreator from "../ActionCreator";
import InputForm from "../components/Form";
import TaskField from "../components/TasksField";
import { createTask, loadTasks } from "../store/tasks/actions"

const TodoListPage = () => {

    const listId = useParams().id;
    
    const loadTasksById = useActionCreator(loadTasks);
    const [showDone, setDone] = useState(false);
    const createItem = useActionCreator(createTask);
    
    useEffect(() => {
        loadTasksById(listId)
    }, [listId])
    
    const changeDone = (event) => {
        setDone(event.target.checked);
    }

    const addTask = (task) => {
        createItem(listId, task)
    }
    return (
        <article>
            <p className="state"><input type="checkbox" name="statusCheckbox" onChange={changeDone}/>Get All Tasks</p>
            <TaskField id={listId} done={showDone} />
            <InputForm onSubmit={addTask}/>
        </article>
    )
}

export default TodoListPage;