import { combineReducers } from 'redux'

import { DASHBOARD_LOADED} from './actions'

function openedTasksReducer(state = {}, action) {
    switch(action.type) {
        case DASHBOARD_LOADED: return action.payload.notCompletedTasks.map(list => {return {[list.id]: list.notCompletedTasksCount}})

        default: return state
    }
}

export default combineReducers({
    today: (today = 0, {type, payload}) => type === DASHBOARD_LOADED ? payload.tasksCountForToday : today,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.notCompletedTasks.map(list => {return {id: list.id, title: list.title}}) : lists,
    openedTasks: openedTasksReducer
})