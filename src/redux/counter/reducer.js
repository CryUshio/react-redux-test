import actionTypes from './action-types';
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
    [actionTypes.INCREMENT]: (state, action) => {
        console.log(action);
        return { ...state, count: state.count + 1 };
    },
    [actionTypes.DECREMENT]: (state, action) => {
        console.log(action);
        return { ...state, count: state.count - 1 };
    },
    [actionTypes.RESET]: (state, action) => {
        console.log(action);
        return { ...state, ...action.payload };
    }
}, initialState);

export default counter;