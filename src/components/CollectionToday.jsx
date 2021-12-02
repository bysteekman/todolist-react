import React from "react";
import useActionCreator from "../ActionCreator";
import { deleteCollectionItem, updateCollectionItem } from "../store/collection/action";
import CollectionItem from "./CollectionItem";

const CollectionToday = (props) => {

    const deleteTodoItem = (listId, task) => {
        props.onDelete(listId, task)
    }

    const changeStatus = (listId, task) => {
        props.onUpdate(listId, task)
    }

    return (
        <section className="list_tasks">
          {
              props.tasksList.map(task => <CollectionItem key={task.id.toString()} item={task} onUpdate={changeStatus} onDelete={deleteTodoItem}/>)
          }
        </section>
    )
}

export default CollectionToday;