import { combineReducers } from 'redux'
import { homeReducer } from 'components/home'
import { blogReducer } from 'components/blog'

export default combineReducers({
  home: homeReducer,
  blog: blogReducer
})
