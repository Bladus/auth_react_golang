import {boundApiReducer} from './common';
import { actions } from 'actions';

export const login_struct = {
    pending: null,
    data: {}
}

const login = boundApiReducer(actions.POST_AUTH, new Object);

export default login;