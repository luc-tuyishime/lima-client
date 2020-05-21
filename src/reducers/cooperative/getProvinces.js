import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.GET_PROVINCES_START:
            return {
                ...state,
                fetchProvinces: { ...state.fetchProvinces, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.GET_PROVINCES_END:
            return {
                ...state,
                fetchProvinces: { ...state.fetchProvinces, loading: false }
            };
        case cooperativeActionsTypes.GET_PROVINCES_SUCCESS:
            return {
                ...state,
                listOfProvinces: payload.content,
                fetchProvinces: { loading: false, message: payload.message, errors: {} }
            };
        case cooperativeActionsTypes.GET_PROVINCES_FAILURE:
            return {
                ...state,
                fetchProvinces: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
