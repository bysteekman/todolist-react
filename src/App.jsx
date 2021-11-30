import { useEffect} from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import Aside from './components/Aside';
import TodayTaskPage from './routers/TodayTaskPage';
import TodoListPage from './routers/TodoListPage';
import { loadDashboard } from './store/dashboard/actions';
import { useDispatch, useSelector } from 'react-redux';
import useActionCreator from './ActionCreator';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadDashboard(dispatch)
  }, [])
  
  const lists = useSelector(state => state.dashboard.lists);
  const count = useSelector(state => state.dashboard.openedTasks);
  // console.log(count.filter(l => l[10]))
  
  return (
    <main>
      <Aside todoLists={lists} listsCount={count}/>
        <Routes>
          <Route path="/todo-list/:id" element={<TodoListPage />} />
          <Route path="/today" element={<TodayTaskPage />} />
        </Routes>
    </main>
  )
}

export default App;
