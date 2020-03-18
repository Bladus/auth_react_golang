import {boundApiReducer} from './common';
import { actions } from 'actions';

export const user_struct = {
    pending: null,
    data: {}
}

const user = boundApiReducer(actions.GET_USER, new Object);

export default user;