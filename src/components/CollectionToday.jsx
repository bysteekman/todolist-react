import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionToday = (props) => {

    const onDelete = (id, listId) => {
        props.onDelete(id, listId);
    }

    const onUpdate = (id, done, listId) => {
        props.onUpdate(id, done, listId)
    }

    return (
        <section className="list_tasks">
          {
              props.tasksList.map(task => <CollectionItem key={task.id.toString()} item={task} onUpdate={onUpdate} onDelete={onDelete}/>)
          }
        </section>
    )
}

export default CollectionToday;