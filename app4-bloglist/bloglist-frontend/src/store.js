import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers/index.js'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

export default store

