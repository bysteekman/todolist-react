import React from "react";
import TodoItem from "./TodoItem";

const TaskField = (props) => {
    return (
        <section className="list_tasks">
          {
              props.tasksList.map(task => <TodoItem key={task.id.toString()} item={task}/>)
          }
        </section>
    )
}

export default TaskField;