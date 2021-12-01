import { TASKS_LOADED } from "./actions";

export default function tasksReducer (state = {}, action) {
    switch(action.type) {
        case TASKS_LOADED: return {...state, [action.listId]: action.tasks}

        default: return state;
    }
} 