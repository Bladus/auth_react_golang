import {boundApiReducer} from './common';
import { actions } from 'actions';

export const login_struct = {
    pending: null,
    data: {
        ok: 0
    }
}

const login = boundApiReducer(actions.POST_AUTH);

export default login;