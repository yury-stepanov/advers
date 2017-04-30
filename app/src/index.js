import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Main from './main'

// main render function
const render = Component => {
  ReactDOM.render(
    // AppContainer is responsible for updating whole component tree
    // it will try to update it with the help of https://github.com/gaearon/react-deep-force-update
    // so it will ignore shouldComponentUpdate method
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('app')
  )
}

// initially render our app
render(Main)

// setting devServer: { hot: true }
// will expose hot module.hot hook to our code
if (module.hot) {
  // this function will mark `App` module as invalid during update
  // and will call the update handler in order to handle new code
  module.hot.accept('./main', () => {
    render(Main)
  })
}
