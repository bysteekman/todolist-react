import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import dashboardReducer from './dashboard/reducer'
import tasksReducer from './tasks/reducer'


export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;