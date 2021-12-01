import { taskApi } from "../../requests"

export const TASKS_LOADED = 'tasks/loaded'
export const TASK_STATUS_UPDATED = 'task/update'
export const TASK_DELETE = 'task/delete'
export const TASK_CREATE = 'task/create'

export const loadTasks = listId => {
    return taskApi.getTasksByListId(listId)
        .then(tasks => { return {
            type: TASKS_LOADED,
            listId,
            tasks
        }})
}

export const updateTask = (listId, task) => {
    return taskApi.changeTaskStatus(listId, task)
    .then(task => {return {
        type: TASK_STATUS_UPDATED,
        listId,
        task
    }})
}

export const deleteTask = (listId, task) => {
    return taskApi.deleteTask(listId, task.id)
        .then(res => {return {
            type: TASK_DELETE,
            listId,
            task
        }})
}

export const createTask = (listId, task) => {
    return taskApi.createTask(listId, task)
        .then(task => {return {
            type: TASK_CREATE,
            listId,
            task
        }})
}