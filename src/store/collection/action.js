import { taskApi } from "../../requests"

export const COLLECTION_TODAY_LOADED = 'collection/loaded'
export const COLLECTION_TASK_UPDATE = 'collection/update'
export const COLLECTION_TASK_DELETE = 'collection/delete'

export const loadCollectionToday = () => dispatch => {
    taskApi.getCollectionToday()
        .then(collection => dispatch({
            type: COLLECTION_TODAY_LOADED,
            collection
        }))
        .catch(error => console.error(`${error.status}: ${error.title}`))
}

export const updateCollectionItem = (listId, task) => dispatch => {
    taskApi.changeTaskStatus(listId, task)
        .then(task => dispatch({
            type: COLLECTION_TASK_UPDATE,
            listId,
            task
        }))
        .catch(error => console.error(`${error.status}: ${error.title}`))
}

export const deleteCollectionItem = (listId, task) => dispatch => {
    taskApi.deleteTask(listId, task.id)
        .then(_ => dispatch({
            type: COLLECTION_TASK_DELETE,
            listId,
            task
        }))
        .catch(error => console.error(`${error.status}: ${error.title}`))
}