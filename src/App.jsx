import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import Aside from './components/Aside';
import TodayTaskPage from './routers/TodayTaskPage';
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
          <Route path="/today" element={<TodayTaskPage />} />
        </Routes>
    </main>
  )
}

export default App;
