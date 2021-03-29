import contentReducer from "./content";
import collapseReducer from "./navbarCollpase";
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    content: contentReducer,
    collapse:collapseReducer
});

export default allReducers;