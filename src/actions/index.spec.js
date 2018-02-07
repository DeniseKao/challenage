import * as actions from './index'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
    })

    it('creates RECEIVE_MSGS when fetching msgs has been done', () => {
        fetchMock.get('https://jimmy319.github.io/challenge/lazy//', {
            total: 1,
            nextPageKey: null,
            messages: [{
                msg_id: 1,
                msg_title: "Message number 1",
                msg_type: "NEWS",
                msg_icon: "https://jimmy319.github.io/news.png"
            }]
        })

        const expectedActions = [
            { type: actions.REQUEST_MSGS, page: '' },
            {
                type: actions.RECEIVE_MSGS,
                page: '',
                nextPage: null,
                msgs: [{
                    msg_id: 1,
                    msg_title: "Message number 1",
                    msg_type: "NEWS",
                    msg_icon: "https://jimmy319.github.io/news.png",
                    deleted: false,
                    selected: false
                }]
            }
        ]
        const store = mockStore({ fetchInfo: {} })

        return store.dispatch(actions.fetchMsgsIfNeeded())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})

describe('msg actions', () => {

    it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
        expect(actions.setVisibilityFilter('SHOW_ALL')).toEqual({
            type: actions.SET_VISIBILITY_FILTER,
            filter: 'SHOW_ALL'
        })
    })

    it('toggleMsg should create TOGGLE_MSG action', () => {
        expect(actions.toggleMsg(1)).toEqual({
            type: actions.TOGGLE_MSG,
            id: 1
        })
    })

    it('deleteMsg should create DELETE_MSGS action', () => {
        expect(actions.deleteMsg()).toEqual({
            type: actions.DELETE_MSGS
        })
    })

    it('unselectMsg should create UNSELECT_MSGS action', () => {
        expect(actions.unselectMsg()).toEqual({
            type: actions.UNSELECT_MSGS
        })
    })
})