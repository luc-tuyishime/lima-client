import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type }) => {
    switch (type) {
        case cooperativeActionsTypes.CLEAR_COOPERATIVE_STORE:
            return {
                ...state,
                createCooperative: {
                    loading: false,
                    message: '',
                    errors: {}
                },
            };

        default:
            return null;
    }
};
