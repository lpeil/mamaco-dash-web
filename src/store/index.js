import { createStore } from 'redux'
import reducer from './reducer'
import initial from './initial'

export default createStore(reducer, initial)
