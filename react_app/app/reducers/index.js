import combineReducers from 'utils/combinereducers';
import user, {user_struct} from 'reducers/user';
import login, {login_struct} from 'reducers/login';

export const initialState = {
    user: user_struct,
    login: login_struct,
};

export default combineReducers({
    user,
    login,
});