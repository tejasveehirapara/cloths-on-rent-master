import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { customerReducer } from './reducer/reducer'

const middlewareEnhancer = applyMiddleware( thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer)

export const store = createStore(customerReducer)