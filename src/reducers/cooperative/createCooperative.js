import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.CREATE_COOPERATIVE_START:
            return {
                ...state,
                createCooperative: { ...state.createCooperative, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.CREATE_COOPERATIVE_END:
            return {
                ...state,
                createCooperative: { ...state.createCooperative, loading: false }
            };
        case cooperativeActionsTypes.CREATE_COOPERATIVE_SUCCESS:
            return {
                ...state,
                createCooperative: { loading: false, message: payload, errors: {} }
            };
        case cooperativeActionsTypes.CREATE_COOPERATIVE_FAILURE:
            return {
                ...state,
                createCooperative: { loading: false, message: '', errors: payload.message }
            };
        default:
            return null;
    }
};
