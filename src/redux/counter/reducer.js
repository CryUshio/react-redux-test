import actionTypes from './action-types';
import produce from 'immer';
import { handleActions } from 'redux-actions';

const initialState = {
    count: 0
};

// const counter = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.INCREMENT:
//             return { ...state, count: state.count + 1 };
//         case actionTypes.DECREMENT:
//             return { ...state, count: state.count - 1 };
//         case actionTypes.RESET:
//             return { ...state, count: action.count };
//         default:
//             return state;
//     }
// }

const counter = handleActions({
    [actionTypes.INCREMENT]: produce((draft, { payload }) => {
        draft[payload.key] = draft.count + 1;
    }),
    [actionTypes.DECREMENT]: (state, action) => {
        const res = produce((draft, { payload }) => {
            draft['count'] = draft.count - 1;
        });
        const result = res(state, action);
        console.log(result);
        return result;
    },
    [actionTypes.RESET]: produce((draft, { payload }) => {
        draft[payload.key] = payload.value;
    }),
}, initialState);

export default counter;