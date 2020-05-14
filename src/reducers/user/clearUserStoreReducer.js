import { userActionsTypes } from '../../actions-types';

export default (state, { type }) => {
    switch (type) {
        case userActionsTypes.CLEAR_USER_STORE:
            return {
                ...state,
                createUser: {
                    loading: false,
                    message: '',
                    errors: {}
                },
            };

        default:
            return null;
    }
};
