import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.GET_COOPERATIVE_START:
            return {
                ...state,
                fetchCooperative: { ...state.fetchCooperative, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.GET_COOPERATIVE_END:
            return {
                ...state,
                fetchCooperative: { ...state.fetchCooperative, loading: false }
            };
        case cooperativeActionsTypes.GET_COOPERATIVE_SUCCESS:
            return {
                ...state,
                listOfCooperative: payload.content,
                fetchCooperative: { loading: false, message: payload.message, errors: {} }
            };
        case cooperativeActionsTypes.GET_COOPERATIVE_FAILURE:
            return {
                ...state,
                fetchCooperative: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
