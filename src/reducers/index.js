import {combineReducers} from 'redux';
import MapReducer from './MapReducer';
import SearchReducer from './SearchReducer';
import LanguageReducer from './LanguageReducer';

export default combineReducers({
    MapReducer,
    SearchReducer,
    LanguageReducer
})