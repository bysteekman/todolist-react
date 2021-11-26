import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Form from "../components/Form";
import TaskField from "../components/TasksField";

const createTask = (listId, task) => {
    return fetch(`https://localhost:5001/api/lists/${listId}/tasks`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(res => res.json().then(res.ok ? res : (err) => Promise.reject(err)))
  }
  
const deleteTask = (listId, id) => {
    return fetch(`https://localhost:5001/api/lists/${listId}/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.ok ? res : (err) => Promise.reject(err))
}

const changeTaskStatus = (listId, id, done) => {
    return fetch(`https://localhost:5001/api/lists/${listId}/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'done': done
        })
    })
}

const deleteElement = (id, object) => {
    return object.filter(item => item.id !== id);
}

const TodoListPage = () => {
    let { id } = useParams();

    const [tasksList, setTasksList] = useState([]);

    useEffect(() => {
        
    }, [])


    const addTask = (task) => {
        createTask(id, task)
          .then(res => setTasksList([...tasksList, res]))
          .catch(error => alert(error.status + ' ' + error.title))
        
    }
    
    const taskChange = (value) => {
        if(value[0] === 'delete') {
          deleteTask(id, value[1])
            .then(setTasksList(deleteElement(value[1], tasksList)))
            .catch(error => alert(error.status + ' ' + error.title))
        }
        // if(value[0] === 'change') {
        //   changeTaskStatus(activeList, value[1], value[2])
        // }
    }

    return (
        <article>
            <TaskField tasksList={tasksList} onClick={taskChange}/>
            <Form onSubmit={addTask}/>
        </article>
    )
}

export default TodoListPage;