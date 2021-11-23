import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>Todo List</h1>
      <form name="task">
          <input type="text" name="title" placeholder="task name" />
          <input type="text" name="description" placeholder="description" />
          <input type="date" name="dueDate" placeholder="deadline" min="2021-01-01" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
          <button type="submit">Add Task</button>
      </form>
      <section id="tasks" class="hide">
            <button id="button_for_task" class="status_button" name="task_status">Get All Tasks</button>
            <section class="task_list">
            </section>
      </section>
    </main>
  );
}

export default App;
