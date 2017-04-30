import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import store from './store'
import Home from 'components/home'
import Blog from 'components/blog'
import './main.css'

const Main = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route component={Home} />
      </Switch>
    </Provider>
  </Router>
)

export default Main
