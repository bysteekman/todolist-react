import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionToday = (props) => {

    const onDelete = (id, listId) => {
        props.onClick(id, listId);
    }

    const onUpdate = (id, done, listId) => {
        props.onChange(id, done, listId)
    }

    return (
        <section className="list_tasks">
          {
              props.tasksList.map(task => <CollectionItem key={task.id.toString()} item={task} onChange={onUpdate} onClick={onDelete}/>)
          }
        </section>
    )
}

export default CollectionToday;