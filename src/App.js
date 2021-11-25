import { useEffect, useState } from 'react';
import './App.css';

import Aside from './components/Aside';
import Form from './components/Form';
import TaskField from './components/TasksField';

const getTasks = (id) => {
  return fetch(`https://localhost:5001/api/lists/${id}/tasks?all=true`)
    .then(response => response.json())
}

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

const App = () => {

  const [todoLists, setTodoLists] = useState([]);

  const [tasksList, setTasksList] = useState([]);

  const [activeList, setActiveList] = useState();

  useEffect(() => {
    return fetch("https://localhost:5001/api/Lists")
    .then(response => response.json())
    .then(res => setTodoLists(res));
  }, [])

  
  const getListTasks = (id) => {
    getTasks(id)
      .then(res => setTasksList(res))
      .then(setActiveList(id));
  }

  const addTask = (task) => {
    createTask(activeList, task)
      .then(res => setTasksList([...tasksList, res]))
      .catch(error => alert(error.status + ' ' + error.title))
    
  }

  const taskChange = (value) => {
    if(value[0] === 'delete') {
      deleteTask(activeList, value[1])
        .then(setTasksList(deleteElement(value[1], tasksList)))
        .catch(error => alert(error.status + ' ' + error.title))
    }
    // if(value[0] === 'change') {
    //   changeTaskStatus(activeList, value[1], value[2])
    // }
  }

  return (
    <main>
      <Aside todoLists={todoLists} onClick={getListTasks}/>
      <article>
        <TaskField tasksList={tasksList} onClick={taskChange}/>
        <Form onSubmit={addTask}/>
      </article>
    </main>
  )
}

export default App;
