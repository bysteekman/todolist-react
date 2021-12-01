export const TASKS_LOADED = 'tasks/loaded'

export const loadTasks = listId => {
    return fetch(`https://localhost:5001/api/lists/${listId}/tasks?all=true`)
        .then(res => res.json())
        .then(tasks => { return {
            type: TASKS_LOADED,
            listId,
            tasks
        }})
}