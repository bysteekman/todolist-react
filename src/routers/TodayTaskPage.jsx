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
}

const deleteElement = (id, object) => {
    return object.filter(item => item.id !== id);
}

const TodayTaskPage = () => {

    const [tasksList, setTasksList] = useState([]);

    useEffect(() => {
        return fetch(`https://localhost:5001/api/collection/today`)
        .then(response => response.json())
        .then(res => setTasksList(res));
      }, [ ])

    
    const taskChange = (value) => {
        if(value[0] === 'delete') {
          deleteTask(0, value[1]) //error here, change 0
            .then(setTasksList(deleteElement(value[1], tasksList)))
            .catch(error => alert(error.status + ' ' + error.title))
        }
        // if(value[0] === 'change') {
        //   changeTaskStatus(activeList, value[1], value[2])
        // }
    }

    return (
        <article>
            <CollectionToday tasksList={tasksList} onClick={taskChange}/>
        </article>
    )
}

export default TodayTaskPage;