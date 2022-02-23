import rootReducer from "./reducers";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Saga from '../sagas/Saga'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(Saga)

export default store;