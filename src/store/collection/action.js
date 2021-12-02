import { taskApi } from "../../requests"

export const COLLECTION_TODAY_LOADED = 'collection/loaded'
export const COLLECTION_TASK_UPDATE = 'collection/update'
export const COLLECTION_TASK_DELETE = 'collection/delete'

export const loadCollectionToday = () => {
    return taskApi.getCollectionToday()
        .then(collection => {return {
            type: COLLECTION_TODAY_LOADED,
            collection
        }})
}

export const updateCollectionItem = (listId, task) => {
    return taskApi.changeTaskStatus(listId, task)
        .then(task => { return {
            type: COLLECTION_TASK_UPDATE,
            listId,
            task
        }})
}

export const deleteCollectionItem = (listId, task) => {
    return taskApi.deleteTask(listId, task)
        .then(_ => { return {
            type: COLLECTION_TASK_DELETE,
            listId,
            task
        }})
}