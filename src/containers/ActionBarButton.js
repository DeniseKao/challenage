import { connect } from 'react-redux'
import { deleteMsg, unselectMsg } from '../actions'
import ActionBar from '../components/ActionBar'

const mapStateToProps = (state) => ({
    selectedMsgs: state.actionBar
})

const mapDispatchToProps = {
    onDeleteClick: deleteMsg,
    onCancelClick: unselectMsg

}

const ActionBarButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar)

export default ActionBarButton