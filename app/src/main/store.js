import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./rootReducer', () => {
    const nextRootReducer = require('./rootReducer')
    store.replaceReducer(nextRootReducer)
  })
}

export default store
