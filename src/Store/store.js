import CounterReducer from "../reducers/counter"
import {createStore} from 'redux'

const store=createStore(CounterReducer)
export default store;