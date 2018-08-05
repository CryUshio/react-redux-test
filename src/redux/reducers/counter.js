import { actionTypes } from '@/redux/actions/counter';

export default function(state = { count: 0 }, action) {
    console.log(action);
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, count: state.count + 1 };
        case actionTypes.DECREMENT:
            return { ...state, count: state.count - 1 };
        case actionTypes.RESET:
            return {...state, count: 0};
        default:
            return state;
    }
}