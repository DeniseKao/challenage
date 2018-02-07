import { combineReducers } from 'redux'
import fetchInfo from './fetchInfo'
import messages from './messages'
import visibilityFilter from './visibilityFilter'
import actionBar from './actionBar'

const rootReducer = combineReducers({
    fetchInfo,
    visibilityFilter,
    actionBar,
    messages

})

export default rootReducer