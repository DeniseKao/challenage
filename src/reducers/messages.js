import { RECEIVE_MSGS, TOGGLE_MSG, DELETE_MSGS, UNSELECT_MSGS } from '../actions'

const messages = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_MSGS:
            return [...state, ...action.msgs]
        case TOGGLE_MSG:
            return state.map(msg =>
                (msg.msg_id === action.id) ?
                { ...msg, selected: !msg.selected } :
                msg
            )
        case DELETE_MSGS:
            return state.map(msg =>
                (msg.selected) ?
                { ...msg, selected: false, deleted: true } :
                msg
            )
        case UNSELECT_MSGS:
            return state.map(msg =>
                (msg.selected) ?
                { ...msg, selected: false } :
                msg
            )
        default:
            return state
    }
}

export default messages