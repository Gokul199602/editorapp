import contentReducer from "./content"
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    content: contentReducer
});

export default allReducers;