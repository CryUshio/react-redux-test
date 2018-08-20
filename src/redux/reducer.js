import { combineReducers } from 'redux';
import counter from '@/redux/counter/reducer';
import home from '@/redux/home/reducer';

export default combineReducers({
    counter, home
});
