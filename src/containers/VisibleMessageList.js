import { connect } from 'react-redux'
import { toggleMsg } from '../actions'
import MessageList from '../components/MessageList'

const getVisibleMessages = (messages, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return messages.filter(m => !m.deleted)
        case 'SHOW_SOCIAL':
            return messages.filter(m => !m.deleted && m.msg_type === 'SOCIAL')
        case 'SHOW_NEWS':
            return messages.filter(m => !m.deleted && m.msg_type === 'NEWS')
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => ({
    messages: getVisibleMessages(state.messages, state.visibilityFilter)
})

const mapDispatchToProps = {
    onMsgClick: toggleMsg
}

const VisibleMessageList = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList)

export default VisibleMessageList