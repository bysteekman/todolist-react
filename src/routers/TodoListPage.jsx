import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useActionCreator from "../ActionCreator";
import Form from "../components/Form";
import TaskField from "../components/TasksField";
import { loadTasks } from "../store/tasks/actions"

// const createTask = (listId, task) => {
//     return fetch(`https://localhost:5001/api/lists/${listId}/tasks`, {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(task)
//     })
//     .then(res => res.json().then(res.ok ? res : (err) => Promise.reject(err)))
//   }
  
// const deleteTask = (listId, id) => {
//     return fetch(`https://localhost:5001/api/lists/${listId}/tasks/${id}`, {
//             method: 'DELETE'
//         })
//         .then(res => res.ok ? res : (err) => Promise.reject(err))
// }

// const changeTaskStatus = (listId, id, done) => {
//     return fetch(`https://localhost:5001/api/lists/${listId}/tasks/${id}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             "done": done
//         })
//     })
//     .then(res => res.ok ? res : (err) => Promise.reject(err))
// }

// const deleteElement = (id, object) => {
//     return object.filter(item => item.id !== id);
// }

// const changeItem = (id) => item => {
//     if(item.id === id) {
//         item.done = !item.done;
//         return item
//     }
//     return item
// }

const TodoListPage = () => {

    const listId = useParams().id;
    
    const loadTasksById = useActionCreator(loadTasks)(listId);
    const [showDone, setDone] = useState(false);
    
    useEffect(() => {
        return loadTasksById
    }, [listId])
    


    // const addTask = (task) => {
    //     createTask(id, task)
    //       .then(res => setTasksList([...tasksList, res]))
    //       .catch(error => alert(error.status + ' ' + error.title))
        
    // }

    
    
    // const onDelete = (itemId) => {
    //     deleteTask(id, itemId)
    //         .then(setTasksList(deleteElement(itemId, tasksList)))
    //         .catch(error => alert(error.status + ' ' + error.title))
    // }

    // const onUpdate = (itemId, done) => {
    //     changeTaskStatus(id, itemId, done)
    //         .then(setTasksList(tasksList.map(changeItem(itemId))))
    //         .catch(error => alert(error.status + ' ' + error.title))
    // }

    const changeDone = (event) => {
        setDone(event.target.checked);
    }

    return (
        <article>
            <p className="state"><input type="checkbox" name="statusCheckbox" onChange={changeDone}/>Get All Tasks</p>
            <TaskField id={listId} done={showDone}/>
            {/* <Form onSubmit={addTask}/> */}
        </article>
    )
}

export default TodoListPage;