import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import dashboardReducer from './dashboard/reducer'
import tasksReducer from './tasks/reducer'
import collectionReducer from './collection/reducer'


export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer,
    collectionToday: collectionReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;