import { user as initialState } from '../../store/initialState';

import clearUserStoreReducer from './clearUserStoreReducer';
import createUser from './createUser';
import activateUser from './activateAccount';
import loginUser from './loginReducer';
import logoutReducer from './logoutReducer';
import forgotPassword from './forgotPassword';
import resetPassword from './resetPassword';


export default (state = initialState, action) => {
    const clearUserStore = clearUserStoreReducer(state, action);
    const create = createUser(state, action);
    const activate = activateUser(state, action);
    const login = loginUser(state, action);
    // const logout = logoutReducer(state, action);
    const forgot = forgotPassword(state, action);
    const reset = resetPassword(state, action);

    return (
        clearUserStore
        || create
        || activate
        || login
        || forgot
        || reset
        || state
    );
};