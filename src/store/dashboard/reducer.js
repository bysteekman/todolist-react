import { combineReducers } from 'redux'
import { COLLECTION_TASK_DELETE, COLLECTION_TASK_UPDATE } from '../collection/action';
import { TASK_CREATE, TASK_DELETE, TASK_STATUS_UPDATED } from '../tasks/actions'

import { DASHBOARD_LOADED, validDate} from './actions'


function openedTasksReducer(state = {}, action) {
    switch(action.type) {
        case DASHBOARD_LOADED: 
            return action.payload.notCompletedTasks.reduce((obj, list) => {
                obj[list.id] = list.notCompletedTasksCount;
                return obj;
            }, {})
        
        case TASK_STATUS_UPDATED:
            return {...state, [action.listId]: (state[action.listId] += (!action.task.done - action.task.done))}

        case TASK_DELETE:
            return {...state, [action.listId]: action.task.done ? state[action.listId] : --state[action.listId] }

        case TASK_CREATE:
            return {...state, [action.listId]: ++state[action.listId]}

        case COLLECTION_TASK_UPDATE:
            return {...state, [action.listId]: (state[action.listId] += (!action.task.done - action.task.done))}
        
        case COLLECTION_TASK_DELETE:
            return {...state, [action.listId]: action.task.done ? state[action.listId] : --state[action.listId] }

        default: return state
    }
}

function todayReducer(state = 0, action) {
    switch(action.type) {
        case DASHBOARD_LOADED:
            return action.payload.tasksCountForToday

        case TASK_STATUS_UPDATED:
            return validDate(action.task.dueDate) ? state += (!action.task.done - action.task.done) : state

        case TASK_DELETE:
            return action.task.done ? state : (validDate(action.task.dueDate) ? --state : state)
        
        case TASK_CREATE:
            return validDate(action.task.dueDate) ? ++state : state
        
        case COLLECTION_TASK_UPDATE:
            return state += (!action.task.done - action.task.done)

        case COLLECTION_TASK_DELETE:
            return action.task.done ? state : --state

        default: return state
    }
}

export default combineReducers({
    today: todayReducer,
    lists: (lists = [], {type, payload}) => type === DASHBOARD_LOADED ? payload.notCompletedTasks.map(list => {return {id: list.id, title: list.title}}) : lists,
    openedTasks: openedTasksReducer
})