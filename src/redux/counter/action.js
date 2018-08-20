import actionTypes from './action-types';
import { createAction } from 'redux-actions';

// const increment = () => {
//     return {
//         type: actionTypes.INCREMENT
//     }
// }

// const decrement = () => {
//     return {
//         type: actionTypes.DECREMENT
//     }
// }

// const reset = () => {
//     const count = 0;
//     return {
//         type: actionTypes.RESET,
//         count
//     }
// }

const increment = createAction(actionTypes.INCREMENT, (props) => {
    return {
        ...props,
        key: 'count'
    }
});
const decrement = createAction(actionTypes.DECREMENT);
const reset = createAction(actionTypes.RESET, () => {
    return {
        key: 'count',
        value: 0
    };
});

export default {
    increment, decrement, reset
}

