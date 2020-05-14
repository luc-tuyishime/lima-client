import jwt from 'jwt-decode';
import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {

    switch (type) {
        case userActionsTypes.LOGIN_USER_START:
            return {
                ...state,
                loginUser: { ...state.login, message: '', loading: true, errors: {} }
            };
        case userActionsTypes.LOGIN_USER_END:
            return {
                ...state,
                loginUser: { ...state.login, loading: false }
            };
        case userActionsTypes.LOGIN_USER_SUCCESS:
            const userToken = jwt(payload.accessToken);
            const { user } = userToken
            localStorage.user = JSON.stringify(user);
            localStorage.tokenUser = payload.accessToken;
            return {
                ...state,
                isAuth: true,
                profile: user,
                token: payload.accessToken,
                loginUser: { loading: false, message: payload.message, errors: {} }
            };
        case userActionsTypes.LOGIN_USER_FAILURE:
            return {
                ...state,
                loginUser: { loading: false, message: '', errors: payload.message }
            };
        default:
            return null;
    }
};
