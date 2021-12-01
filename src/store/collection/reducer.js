import { COLLECTION_TODAY_LOADED } from "./action";

export default function tasksReducer (state = [], action) {
    switch(action.type) {
        case COLLECTION_TODAY_LOADED: 
            return action.collection;

        default: return state;
    }
}