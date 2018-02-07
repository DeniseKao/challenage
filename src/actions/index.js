export const REQUEST_MSGS = 'REQUEST_MSGS'
export const RECEIVE_MSGS = 'RECEIVE_MSGS'
export const FETCH_MSGS_FAILURE = 'FETCH_MSGS_FAILURE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TOGGLE_MSG = 'TOGGLE_MSG'
export const DELETE_MSGS = 'DELETE_MSGS'
export const UNSELECT_MSGS = 'UNSELECT_MSGS'



export const requestMsgs = page => ({
    type: REQUEST_MSGS,
    page
})

export const receiveMsgs = (json, page) => ({
    type: RECEIVE_MSGS,
    page,
    nextPage: json.nextPageKey,
    msgs: json.messages.map(child => ({ ...child, deleted: false, selected: false }))
})

export const fetchMsgsFailure = (ex) => ({
    type: FETCH_MSGS_FAILURE,
    ex
})

const fetchMsgs = (page = '') => dispatch => {
    dispatch(requestMsgs(page))
    return fetch(`https://jimmy319.github.io/challenge/lazy/${page}/`)
        .then(response => response.json())
        .then(json => dispatch(receiveMsgs(json, page)))
        .catch(ex => dispatch(fetchMsgsFailure(ex)))
}

const shouldFetchMsgs = (state) => {
    const fetchInfo = state.fetchInfo

    if (fetchInfo.isFetching) {
        return false
    }

    if (fetchInfo.nextPage === null)
        return false
    return true
}

export const fetchMsgsIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchMsgs(getState())) {
        return dispatch(fetchMsgs(getState().fetchInfo.nextPage))
    }
}

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
})

export const toggleMsg = (id) => ({
    type: TOGGLE_MSG,
    id
})

export const deleteMsg = () => ({
    type: DELETE_MSGS
})

export const unselectMsg = () => ({
    type: UNSELECT_MSGS
})