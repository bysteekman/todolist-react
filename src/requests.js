
export const taskApi = {
    getDashboard() {
        return fetch('https://localhost:5001/api/Dashboard')
            .then(res => res.json().then(res.ok ? res : (err) => Promise.reject(err)))
    },
    getTasksByListId(listId) {
        return fetch(`https://localhost:5001/api/lists/${listId}/tasks?all=true`)
        .then(res => res.json().then(res.ok ? res : (err) => Promise.reject(err)))
    },
    deleteTask(listId, id) {
        return fetch(`https://localhost:5001/api/lists/${listId}/tasks/${id}`, { method: 'DELETE' })
            .then(res => res.ok ? res : (err) => Promise.reject(err))
    },
    createTask(listId, task) {
        return fetch(`https://localhost:5001/api/lists/${listId}/tasks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(res => res.json().then(res.ok ? res : (err) => Promise.reject(err)))
    },
    changeTaskStatus(listId, task) {
        return fetch(`https://localhost:5001/api/lists/${listId}/tasks/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "done": task.done
            })
        })
        .then(res => res.ok ? res.json() : (err) => Promise.reject(err))
    },
    getCollectionToday() {
        return fetch(`https://localhost:5001/api/collection/today`)
            .then(res => res.json().then(res.ok ? res : (err) => Promise.reject(err)))
    }
}