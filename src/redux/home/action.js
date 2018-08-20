import actionTypes from './action-types';
import { createAction } from 'redux-actions';

const setImmer = createAction(actionTypes.IMMER_SET, () => {
    return {
        key: 'name',
        value: 'chym123'
    }
});

export default {
    setImmer
}