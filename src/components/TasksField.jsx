import React from "react";
import TodoItem from "./TodoItem";

const TaskField = (props) => {

    const doChanges = value => {
        props.onClick(value);
    }
    return (
        <section className="list_tasks">
          {
              props.tasksList.map(task => <TodoItem key={task.id.toString()} item={task} onClick={doChanges}/>)
          }
        </section>
    )
}

export default TaskField;