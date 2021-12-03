import { COLLECTION_TASK_DELETE, COLLECTION_TASK_UPDATE, COLLECTION_TODAY_LOADED } from "./action";

export default function tasksReducer (state = [], action) {
    switch(action.type) {
        case COLLECTION_TODAY_LOADED: 
            return action.collection;

        case COLLECTION_TASK_UPDATE: 
            return state.map(i => i.id === action.task.id ? {...i, done: [action.task.done]} : i)

        case COLLECTION_TASK_DELETE:
            return state.filter(i => i.id !== action.task.id)

        default: return state;
    }
}