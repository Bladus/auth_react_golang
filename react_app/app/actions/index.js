import { ApiActions, actionCreator, post, get } from './common';

export const actions = new ApiActions(
    'POST_AUTH',
    'GET_USER',
    'LOGOUT'
);

const headers = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }

}

export const login = dispatch => data => post(actions.POST_AUTH, dispatch, '/api/login', data, headers);
export const logout = dispatch => get(actions.LOGOUT, dispatch, '/api/logout');
export const getUser = dispatch => post(actions.GET_USER, dispatch, '/api/user');
