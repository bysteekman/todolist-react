export const DASHBOARD_LOADED = 'dashboard/loaded'

export const loadDashboard = () => {
    return fetch('https://localhost:5001/api/Dashboard')
        .then(res => res.json())
        .then(dashboard => { return {
            type: DASHBOARD_LOADED,
            payload: dashboard
        }})
}