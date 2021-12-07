import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useActionCreator from "../ActionCreator";
import InputForm from "../components/Form";
import TaskField from "../components/TasksField";
import { createTask, deleteTask, loadTasks, updateTask } from "../store/tasks/actions"

const TodoListPage = () => {

    const listId = useParams().id;
    const [showDone, setDone] = useState(false);
    
    const loadTasksById = useActionCreator(loadTasks);
    const createItem = useActionCreator(createTask);
    const deleteItem = useActionCreator(deleteTask);
    const updateItem = useActionCreator(updateTask);

    const deleteTodoItem = (task) => {
        deleteItem(listId, task)
    }

    const changeStatus = (task) => {
        updateItem(listId, task)
    }
    
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
            <TaskField id={listId} done={showDone} onUpdate={changeStatus} onDelete={deleteTodoItem}/>
            <InputForm onSubmit={addTask}/>
        </article>
    )
}

export default TodoListPage;