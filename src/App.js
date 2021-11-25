import { useEffect, useState } from 'react';
import './App.css';

import Aside from './components/Aside';
import Form from './components/Form';
import TaskField from './components/TasksField';

// const getLists = () => {
//   return fetch("https://localhost:5001/api/Lists",)
//     .then(response => response.json())
//     .then(res => setTodoLists(res));
// }

const App = () => {

  const [todoLists, setTodoLists] = useState([])

  const [tasksList, setTasksList] = useState([
    {id: 1, title: 'first task', description: 'Very important task, you must do it because you will be fired, this is simple task for you', dueDate: '2021-11-30'},
    {id: 2, title: 'second task', description: 'Very important task, you must do it because you will be fired, this is simple task for you', dueDate: '2021-11-30'},
    {id: 3, title: 'third task', description: 'Very important task, you must do it because you will be fired, this is simple task for you', dueDate: '2021-11-30'},
  ])

  useEffect(() => {
    return fetch("https://localhost:5001/api/Lists")
    .then(response => response.json())
    .then(res => setTodoLists(res));
  }, [])

  const addTask = (task) => {
    setTasksList([...tasksList, task])
  }

  return (
    <main>
      <Aside todoLists={todoLists}/>
      <article>
        <TaskField tasksList={tasksList}/>
        <Form onSubmit={addTask}/>
      </article>
    </main>
  )
}

export default App;
