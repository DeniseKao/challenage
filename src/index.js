import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import ViewDetail from './components/ViewDetail'

import './styles/css/index.css'



const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)


render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/detail" component={ViewDetail}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

