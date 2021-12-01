import { taskApi } from "../../requests"

export const DASHBOARD_LOADED = 'dashboard/loaded'

export const loadDashboard = () => {
    return taskApi.getDashboard()
        .then(dashboard => { return {
            type: DASHBOARD_LOADED,
            payload: dashboard
        }})
}