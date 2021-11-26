import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionToday = (props) => {

    const doChanges = value => {
        props.onClick(value);
    }
    return (
        <section className="list_tasks">
          {
              props.tasksList.map(task => <CollectionItem key={task.id.toString()} item={task} onClick={doChanges}/>)
          }
        </section>
    )
}

export default CollectionToday;