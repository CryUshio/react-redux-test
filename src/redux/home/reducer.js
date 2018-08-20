import actionTypes from './action-types';
import produce from 'immer';
import { handleActions } from 'redux-actions';

const reducer = handleActions({
    [actionTypes.IMMER_SET]: produce((draft, { payload }) => {
        draft[payload.key] = payload.value;
    })
}, { name: '' });

export default reducer;