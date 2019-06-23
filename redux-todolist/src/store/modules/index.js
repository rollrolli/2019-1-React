import { combineReducers } from 'redux';
import todos from './todos';


export default combineReducers({
    todos,
    // 다른 reducer 만들면 여기에 넣어줌
});