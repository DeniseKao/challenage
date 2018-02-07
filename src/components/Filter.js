import React from 'react'
import FilterTab from '../containers/FilterTab'

const Filter = () => (
  <div className="filter-area">
    <FilterTab filter="SHOW_ALL">
      All
    </FilterTab>
    
    <FilterTab filter="SHOW_SOCIAL">
      Social
    </FilterTab>
    
    <FilterTab filter="SHOW_NEWS">
      News
    </FilterTab>
  </div>
)

export default Filter
