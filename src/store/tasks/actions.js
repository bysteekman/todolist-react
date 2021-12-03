import { taskApi } from "../../requests"

export const TASKS_LOADED = 'tasks/loaded'
export const TASK_STATUS_UPDATED = 'task/update'
export const TASK_DELETE = 'task/delete'
export const TASK_CREATE = 'task/create'

export const loadTasks = listId => dispatch => {
    taskApi.getTasksByListId(listId)
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            listId,
            tasks
        }))
        .catch(error => console.error(`${error.status}: ${error.title}`))
}

export const updateTask = (listId, task) => dispatch => {
    taskApi.changeTaskStatus(listId, task)
    .then(task => dispatch({
        type: TASK_STATUS_UPDATED,
        listId,
        task
    }))
    .catch(error => console.error(`${error.status}: ${error.title}`))
}

export const deleteTask = (listId, task) => dispatch => {
    taskApi.deleteTask(listId, task.id)
        .then(_ => dispatch({
            type: TASK_DELETE,
            listId,
            task
        }))
        .catch(error => console.error(`${error.status}: ${error.title}`))
}

export const createTask = (listId, task) => dispatch => {
    taskApi.createTask(listId, task)
        .then(task => dispatch({
            type: TASK_CREATE,
            listId,
            task
        }))
        .catch(error => console.error(`${error.status}: ${error.title}`))
}