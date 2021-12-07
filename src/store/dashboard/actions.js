import { taskApi } from "../../requests"

const dateNow = new Date();

export const DASHBOARD_LOADED = 'dashboard/loaded'

export const loadDashboard = () => dispatch => {
    taskApi.getDashboard()
        .then(dashboard => dispatch({
            type: DASHBOARD_LOADED,
            payload: dashboard
        }))
        .catch(error => console.error(`${error.status}: ${error.title}`))
}

export const validDate = (date) => {
    let correctFormatDate = new Date(date)
    return correctFormatDate < dateNow.setDate(dateNow.getDate()+1)
}