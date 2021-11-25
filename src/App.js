import { useEffect, useState } from 'react';
import './App.css';

import Aside from './components/Aside';
import Form from './components/Form';
import TaskField from './components/TasksField';

const getTasks = (id) => {
  return fetch(`https://localhost:5001/api/lists/${id}/tasks?all=true`)
    .then(response => response.json())
}

const App = () => {

  const [todoLists, setTodoLists] = useState([]);

  const [tasksList, setTasksList] = useState([]);

  const[activeList, setActiveList] = useState();

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
    setTasksList([...tasksList, task])
  }

  return (
    <main>
      <Aside todoLists={todoLists} onClick={getListTasks}/>
      <article>
        <TaskField tasksList={tasksList}/>
        <Form listId={activeList} onSubmit={addTask}/>
      </article>
    </main>
  )
}

export default App;
