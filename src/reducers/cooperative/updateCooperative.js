import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.UPDATE_COOPERATIVE_START:
            return {
                ...state,
                updateCooperative: { ...state.updateCooperative, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.UPDATE_COOPERATIVE_END:
            return {
                ...state,
                updateCooperative: { ...state.updateCooperative, loading: false }
            };
        case cooperativeActionsTypes.UPDATE_COOPERATIVE_SUCCESS:
            return {
                ...state,
                updateCooperative: { loading: false, message: payload.message, errors: {} }
            };
        case cooperativeActionsTypes.UPDATE_COOPERATIVE_FAILURE:
            return {
                ...state,
                updateCooperative: { loading: false, message: '', errors: payload }
            };
        default:
            return null;
    }
};
