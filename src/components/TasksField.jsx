import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react/cjs/react.development";
import TodoItem from "./TodoItem";
import { RootStateOrAny } from "react-redux";
import useActionCreator from "../ActionCreator";
import { deleteTask, updateTask } from "../store/tasks/actions";

const TaskField = (props) => {
    const tasksList = useSelector(state =>  state.tasks[props.id] ? state.tasks[props.id] : []);

    const deleteTodoItem = (task) => {
        props.onDelete(task)
    }

    const changeStatus = (task) => {
        props.onUpdate(task)
    }

    const visibleTasks = props.done ? tasksList : tasksList.filter(i => !i.done);

    return (
        <section className="list_tasks">
          {
              visibleTasks.map(task => <TodoItem key={task.id.toString()} item={task} onUpdate={changeStatus} onDelete={deleteTodoItem}/>)
          }
        </section>
    )
}

export default TaskField;