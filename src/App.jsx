import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import Aside from './components/Aside';
import Form from './components/Form';
import TaskField from './components/TasksField';
import TodoListPage from './routers/TodoListPage';


const App = () => {

  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    return fetch("https://localhost:5001/api/Dashboard")
    .then(response => response.json())
    .then(res => setTodoLists(res.notCompletedTasks));
  }, [])

  return (
    <main>
      <Aside todoLists={todoLists}/>
        <Routes>
          <Route path="/todo-list/:id" element={<TodoListPage />} />
          {/* <Route path="/today" element={<TaskField tasksList={tasksList} onClick={taskChange}/>} /> */}
        </Routes>
        {/* <Form onSubmit={addTask}/> */}
    </main>
  )
}

export default App;
