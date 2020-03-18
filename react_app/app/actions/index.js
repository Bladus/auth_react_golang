import { ApiActions, actionCreator, post } from './common';

export const actions = new ApiActions(
    'POST_AUTH',
    'GET_USER',
);

const headers = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }

}

export const login = dispatch => data => post(actions.POST_AUTH, dispatch, '/api/login', data, headers);
export const getUser = dispatch => post(actions.GET_USER, dispatch, '/api/user');