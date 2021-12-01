import { useEffect} from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import Aside from './components/Aside';
import TodayTaskPage from './routers/TodayTaskPage';
import TodoListPage from './routers/TodoListPage';
import { loadDashboard } from './store/dashboard/actions';
import useActionCreator from './ActionCreator';


const App = () => {
  useActionCreator(loadDashboard);

  return (
    <main>
      <Aside/>
        <Routes>
          <Route path="/todo-list/:id" element={<TodoListPage />} />
          <Route path="/today" element={<TodayTaskPage />} />
        </Routes>
    </main>
  )
}

export default App;
