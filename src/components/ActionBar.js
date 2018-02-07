import React from 'react'
import PropTypes from 'prop-types'
import ActionButton from './ActionButton'

// console.log(props)
const ActionBar = ({selectedMsgs, onDeleteClick, onCancelClick}) => {
  if (selectedMsgs.length===0) {
    return null
  }

  return (
    <div className="action-bar">
      <ActionButton className="del" onClick={() => onDeleteClick()}>
        DELETE
      </ActionButton>
      
      <ActionButton  onClick={() => onCancelClick()}>
        CANCEL
      </ActionButton>
      
    </div>
  )
}

ActionBar.propTypes = {
  selectedMsgs: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
}
export default ActionBar
