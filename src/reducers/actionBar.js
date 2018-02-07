import { TOGGLE_MSG, DELETE_MSGS, UNSELECT_MSGS } from '../actions'

const actionBar = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_MSG:
            if (state.indexOf(action.id) >= 0) {
                const newState = state.slice()
                newState.splice(state.indexOf(action.id), 1)
                return newState
            } else
                return [...state, action.id]
        case DELETE_MSGS:
        case UNSELECT_MSGS:
            return []
        default:
            return state
    }
}

export default actionBar