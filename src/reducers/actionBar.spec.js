import actionBar from './actionBar'
import * as actions from '../actions/index'

describe('fetch info reducers', () => {
    it('should handle initial state', () => {
        expect(
            actionBar(undefined, {})
        ).toEqual([])
    })

    it('should handle TOGGLE_MSG', () => {
        expect(actionBar([], {
                type: actions.TOGGLE_MSG,
                id: 1
            }))
            .toEqual([1])

        expect(actionBar([1], {
                type: actions.TOGGLE_MSG,
                id: 2
            }))
            .toEqual([1, 2])

        expect(actionBar([1, 2], {
                type: actions.TOGGLE_MSG,
                id: 1
            }))
            .toEqual([2])

    })

    it('should handle DELETE_MSGS', () => {
        expect(actionBar([], { type: actions.DELETE_MSGS }))
            .toEqual([])

        expect(actionBar([1, 3], { type: actions.DELETE_MSGS }))
            .toEqual([])


    })

    it('should handle UNSELECT_MSGS', () => {
        expect(actionBar([], { type: actions.UNSELECT_MSGS }))
            .toEqual([])

        expect(actionBar([1, 3], { type: actions.UNSELECT_MSGS }))
            .toEqual([])


    })



})