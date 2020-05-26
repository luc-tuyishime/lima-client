import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.CLEAR_DELETE_COOPERATIVE_STORE:
            return {
                ...state,
                deleteCooperative: { ...payload, loading: false, message: '', errors: {} }
            };
        case cooperativeActionsTypes.DELETE_COOPERATIVE_START:
            return {
                ...state,
                deleteCooperative: { ...state.deleteCooperative, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.DELETE_COOPERATIVE_END:
            return {
                ...state,
                deleteCooperative: { ...state.deleteCooperative, loading: false }
            };
        case cooperativeActionsTypes.DELETE_COOPERATIVE_SUCCESS:
        console.log('success', payload);
            return {
                ...state,
                deleteCooperative: { loading: false, message: payload.message, errors: {} }
            };
        case cooperativeActionsTypes.DELETE_COOPERATIVE_FAILURE:
        console.log('failure', payload);
            return {
                ...state,
                deleteCooperative: { loading: false, message: '', errors: payload }
            };
        default:
            return null;
    }
};
