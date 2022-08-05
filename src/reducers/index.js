//combine reducers
import {combineReducers} from 'redux'
import increment from './increment.js'
import isLogged from './isLogged.js'

const combinedReducer = combineReducers({
    increment: increment,
    isLogged: isLogged
})

export default combinedReducer;
