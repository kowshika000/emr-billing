import { combineReducers } from "redux";
import billingReducer from "./billingReducer";


const rootReducer = combineReducers({
    search : billingReducer
})

export default rootReducer