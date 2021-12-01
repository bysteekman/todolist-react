import { TASK_DELETE, TASKS_LOADED, TASK_STATUS_UPDATED, TASK_CREATE } from "./actions";

export default function tasksReducer (state = {}, action) {
    switch(action.type) {
        case TASKS_LOADED: 
            return {...state, [action.listId]: action.tasks}

        case TASK_STATUS_UPDATED: 
            return {...state, [action.listId]: state[action.listId].map(t => t.id === action.task.id ? action.task : t)}

        case TASK_DELETE: 
            return {...state, [action.listId]: state[action.listId].filter(t => t.id !== action.task.id)}

        case TASK_CREATE:
            return {...state, [action.listId]: [...state[action.listId], action.task]}

        default: return state;
    }
} 