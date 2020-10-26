import {combineReducers, createStore} from "redux"
import headerReducer from "./reducers/header-reducer"

const rootReducer = combineReducers({
    header: headerReducer
})

const store = createStore(rootReducer)

export default store