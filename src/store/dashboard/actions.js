export const DASHBOARD_LOADED = 'dashboard/loaded'
// export const DASHBOARD_ADDED_TASK = 'dashboard/added'

export const loadDashboard = dispatch => {
    return fetch('https://localhost:5001/api/Dashboard')
        .then(res => res.json())
        .then(dashboard => dispatch({
            type: DASHBOARD_LOADED,
            payload: dashboard
        }))
}

// export const createTask = (payload) => ({
//     type: DASHBOARD_ADDED_TASK,
//     payload: payload
// })