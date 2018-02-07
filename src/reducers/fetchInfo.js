import {
    REQUEST_MSGS,
    RECEIVE_MSGS
} from '../actions'



const fetchInfo = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_MSGS:
            return { ...state, isFetching: true }
        case RECEIVE_MSGS:
            return { ...state, isFetching: false, nextPage: action.nextPage }
        default:
            return state
    }
}

export default fetchInfo