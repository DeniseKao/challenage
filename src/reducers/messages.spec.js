import messages from './messages'
import * as actions from '../actions/index'

const msg = {
    msg_id: 1,
    msg_title: "Message number 1",
    msg_type: "NEWS",
    msg_icon: "https://jimmy319.github.io/news.png",
    deleted: false,
    selected: false
}
const msgSel = {
    msg_id: 1,
    msg_title: "Message number 1",
    msg_type: "NEWS",
    msg_icon: "https://jimmy319.github.io/news.png",
    deleted: false,
    selected: true
}
const msgDel = {
    msg_id: 1,
    msg_title: "Message number 1",
    msg_type: "NEWS",
    msg_icon: "https://jimmy319.github.io/news.png",
    deleted: true,
    selected: false
}

describe('messages reducers', () => {
    it('should handle initial state', () => {
        expect(
            messages(undefined, {})
        ).toEqual([])
    })

    it('should handle RECEIVE_MSGS', () => {
        expect(messages([], {
                type: actions.RECEIVE_MSGS,
                page: '',
                nextPage: 'page2',
                msgs: [msg]
            }))
            .toEqual([msg])

        expect(messages([msg], {
                type: actions.RECEIVE_MSGS,
                page: '',
                nextPage: 'page2',
                msgs: [{
                    msg_id: 2,
                    msg_title: "Message number 1",
                    msg_type: "NEWS",
                    msg_icon: "https://jimmy319.github.io/news.png",
                    deleted: false,
                    selected: false
                }]
            }))
            .toEqual([msg, {
                msg_id: 2,
                msg_title: "Message number 1",
                msg_type: "NEWS",
                msg_icon: "https://jimmy319.github.io/news.png",
                deleted: false,
                selected: false
            }])
    })

    it('should handle TOGGLE_MSG', () => {
        expect(messages([msg], {
                type: actions.TOGGLE_MSG,
                id: 1
            }))
            .toEqual([msgSel])

        expect(messages([msgSel], {
                type: actions.TOGGLE_MSG,
                id: 1
            }))
            .toEqual([msg])
    })

    it('should handle DELETE_MSGS', () => {
        expect(messages([msgSel], { type: actions.DELETE_MSGS }))
            .toEqual([msgDel])

    })

    it('should handle UNSELECT_MSGS', () => {
        expect(messages([msg], { type: actions.UNSELECT_MSGS }))
            .toEqual([msg])

        expect(messages([msgSel], { type: actions.UNSELECT_MSGS }))
            .toEqual([msg])

    })


})