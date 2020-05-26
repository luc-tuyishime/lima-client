import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.GET_ONE_COOPERATIVE_START:
            return {
                ...state,
                fetchOneCooperative: { ...state.fetchOneCooperative, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.GET_ONE_COOPERATIVE_END:
            return {
                ...state,
                fetchOneCooperative: { ...state.fetchOneCooperative, loading: false }
            };
        case cooperativeActionsTypes.GET_ONE_COOPERATIVE_SUCCESS:
        console.log('1', payload);
            return {
                ...state,
                listOneCooperative: payload,
                fetchOneCooperative: { loading: false, message: payload.message, errors: {} }
            };
        case cooperativeActionsTypes.GET_ONE_COOPERATIVE_FAILURE:
        console.log('2', payload);
            return {
                ...state,
                fetchOneCooperative: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
