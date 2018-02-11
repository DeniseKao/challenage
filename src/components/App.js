import React, { Component } from 'react'
import { connect } from 'react-redux'

import Filter from './Filter'
import ActionBarButton from '../containers/ActionBarButton'
import VisibleMessageList from '../containers/VisibleMessageList'
import { fetchMsgsIfNeeded } from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchMsgsIfNeeded())
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const html = document.documentElement;
    const scrollTop = html.scrollTop ? html.scrollTop : window.pageYOffset
    if (html.scrollHeight - scrollTop <= html.clientHeight + 80 ) {
      this.props.dispatch(fetchMsgsIfNeeded())
    } 
  }

  render() {
  	return (
    <div>
    	<Filter />
    	<VisibleMessageList />
    	<ActionBarButton />
  	</div>
  	)
  }
}

export default connect()(App)
