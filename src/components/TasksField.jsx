import React from "react";
import TodoItem from "./TodoItem";

const TaskField = (props) => {

    const onDelete = id => {
        props.onClick(id);
    }

    const onUpdate = (id, done) => {
        props.onChange(id, done)
    }
    
    return (
        <section className="list_tasks">
          {
              props.taskList.map(task => <TodoItem key={task.id.toString()} item={task} onChange={onUpdate} onClick={onDelete}/>)
          }
        </section>
    )
}

export default TaskField;