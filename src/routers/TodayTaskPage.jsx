import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useActionCreator from "../ActionCreator";
import CollectionToday from "../components/CollectionToday";
import { deleteCollectionItem, loadCollectionToday, updateCollectionItem } from "../store/collection/action";

const TodayTaskPage = () => {

    const tasksList = useSelector(state => state.collectionToday);
    const visibleTasks = tasksList.filter(i => !i.done);

    const loadToday = useActionCreator(loadCollectionToday);
    const deleteItem = useActionCreator(deleteCollectionItem);
    const updateItem = useActionCreator(updateCollectionItem);

    useEffect(() => {
        loadToday()
    }, [])

    const deleteTodoItem = (listId, task) => {
        deleteItem(listId, task)
    }

    const changeStatus = (listId, task) => {
        updateItem(listId, task)
    }

    return (
        <article>
            <CollectionToday tasksList={visibleTasks} onUpdate={changeStatus} onDelete={deleteTodoItem}/>
        </article>
    )
}

export default TodayTaskPage;