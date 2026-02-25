import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './rootReducer'
import mySaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: combineReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(mySaga)


export default store;
