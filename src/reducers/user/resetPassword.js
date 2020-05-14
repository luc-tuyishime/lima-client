import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case userActionsTypes.RESET_PASSWORD_START:
            return {
                ...state,
                resetPassword: { ...state.resetPassword, message: '', loading: true, errors: {} }
            };
        case userActionsTypes.RESET_PASSWORD_END:
            return {
                ...state,
                resetPassword: { ...state.resetPassword, message: '', loading: false, errors: {} }
            };
        case userActionsTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPassword: { loading: true, message: payload.message, errors: {} }
            };
        case userActionsTypes.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                resetPassword: {
                    loading: false,
                    message: '',
                    errors: { message: payload.errors || payload.message }
                }
            };
        default:
            return null;
    }
};
