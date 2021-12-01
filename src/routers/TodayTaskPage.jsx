import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useActionCreator from "../ActionCreator";
import CollectionToday from "../components/CollectionToday";
import Form from "../components/Form";
import TaskField from "../components/TasksField";
import { taskApi } from "../requests";
import { loadCollectionToday } from "../store/collection/action";

const TodayTaskPage = () => {

    const tasksList = useSelector(state => state.collectionToday);
    const loadToday = useActionCreator(loadCollectionToday)

    useEffect(() => {
        return loadToday;
    }, [])

    const visibleTasks = tasksList.filter(i => !i.done);


    return (
        <article>
            <CollectionToday tasksList={visibleTasks}/>
        </article>
    )
}

export default TodayTaskPage;