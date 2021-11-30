import React from "react";
import TodoItem from "./TodoItem";

const TaskField = (props) => {

    const onDelete = id => {
        props.onDelete(id);
    }

    const onUpdate = (id, done) => {
        props.onChange(id, done)
    }

    return (
        <section className="list_tasks">
          {
              props.taskList.map(task => <TodoItem key={task.id.toString()} item={task} onChange={onUpdate} onDelete={onDelete}/>)
          }
        </section>
    )
}

export default TaskField;