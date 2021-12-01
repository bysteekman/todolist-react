import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import TodoItem from "./TodoItem";
import { RootStateOrAny } from "react-redux";

const TaskField = (props) => {
    const tasksList = useSelector(state =>  state.tasks[props.id] ? state.tasks[props.id] : []);

    // const output = useSelector(state => console.log(state.tasks))
    const visibleTasks = props.done ? tasksList : tasksList.filter(i => !i.done);

    return (
        <section className="list_tasks">
          {
              visibleTasks.map(task => <TodoItem key={task.id.toString()} item={task} />)
          }
        </section>
    )
}

export default TaskField;