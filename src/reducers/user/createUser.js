import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case userActionsTypes.CREATE_USER_START:
            return {
                ...state,
                createUser: { ...state.createUser, message: '', loading: true, errors: {} }
            };
        case userActionsTypes.CREATE_USER_END:
            return {
                ...state,
                createUser: { ...state.createUser, loading: false }
            };
        case userActionsTypes.CREATE_USER_SUCCESS:
            localStorage.user = JSON.stringify(payload.user);
            return {
                ...state,
                createUser: { loading: false, message: payload.message, errors: {} }
            };
        case userActionsTypes.CREATE_USER_FAILURE:
            return {
                ...state,
                createUser: { loading: false, message: '', errors: payload.message }
            };
        default:
            return null;
    }
};
