import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case userActionsTypes.ACTIVATE_ACCOUNT_START:
            return {
                ...state,
                activateUser: { ...state.activateUser, message: '', loading: true, errors: {} }
            };
        case userActionsTypes.ACTIVATE_ACCOUNT_END:
            return {
                ...state,
                activateUser: { ...state.activateUser, loading: false }
            };
        case userActionsTypes.ACTIVATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                activateUser: { loading: false, message: payload.message, errors: {} }
            };
        case userActionsTypes.ACTIVATE_ACCOUNT_FAILURE:
            return {
                ...state,
                activateUser: { loading: false, message: '', errors: payload.message }
            };
        default:
            return null;
    }
};
