/**
 * reducer接受原始state和action，返回新的state
 */
import { combineReducers } from "redux-immutable"
import {reducer as headerReducer} from "../common/header/store"

export default combineReducers({
    header:headerReducer
})