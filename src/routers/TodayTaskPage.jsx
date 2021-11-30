import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CollectionToday from "../components/CollectionToday";
import Form from "../components/Form";
import TaskField from "../components/TasksField";

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
    .then(res => res.ok ? res : (err) => Promise.reject(err))
}

const changeItem = (id) => item => {
    if(item.id === id) {
        item.done = !item.done;
        return item
    }
    return item
}

const deleteElement = (id, object) => {
    return object.filter(item => item.id !== id);
}

const TodayTaskPage = () => {

    const [tasksList, setTasksList] = useState([]);
    const visibleTasks = tasksList.filter(i => !i.done);

    useEffect(() => {
        return fetch(`https://localhost:5001/api/collection/today`)
        .then(response => response.json())
        .then(res => setTasksList(res));
      }, [ ])

    
    const onDelete = (id, listId) => {
        deleteTask(listId, id)
            .then(setTasksList(deleteElement(id, tasksList)))
            .catch(error => alert(error.status + ' ' + error.title))
    }

    const onUpdate = (id, done, listId) => {
        changeTaskStatus(listId, id, done)
            .then(setTasksList(tasksList.map(changeItem(id))))
            .catch(error => alert(error.status + ' ' + error.title))
    }

    return (
        <article>
            <CollectionToday tasksList={visibleTasks} onUpdate={onUpdate} onDelete={onDelete}/>
        </article>
    )
}

export default TodayTaskPage;