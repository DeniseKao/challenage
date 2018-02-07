import fetchInfo from './fetchInfo'
import * as actions from '../actions/index'

describe('fetch info reducers', () => {
    it('should handle initial state', () => {
        expect(
            fetchInfo(undefined, {})
        ).toEqual({})
    })

    it('should handle REQUEST_MSGS', () => {
        expect(fetchInfo({}, {
                type: actions.REQUEST_MSGS,
                page: ''
            }))
            .toEqual({ isFetching: true })

        expect(fetchInfo({ nextPage: "page2", isFetching: false }, {
                type: actions.REQUEST_MSGS,
                page: ''
            }))
            .toEqual({ nextPage: "page2", isFetching: true })
    })

    it('should handle RECEIVE_MSGS', () => {
        expect(fetchInfo({}, {
                type: actions.RECEIVE_MSGS,
                page: '',
                nextPage: 'page2',
                msgs: [{
                    msg_id: 1,
                    msg_title: "Message number 1",
                    msg_type: "NEWS",
                    msg_icon: "https://jimmy319.github.io/news.png",
                    deleted: false,
                    selected: false
                }]
            }))
            .toEqual({ nextPage: "page2", isFetching: false })


    })



})