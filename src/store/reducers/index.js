import { combineReducers } from 'redux';
import movieList from './reducer';

const reducer = combineReducers({
    movieList
});

export default reducer;