import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.GET_DISTRICTS_BY_PROVINCES_START:
            return {
                ...state,
                fetchDistrictsByProvinces: { ...state.fetchDistrictsByProvinces, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.GET_DISTRICTS_BY_PROVINCES_END:
            return {
                ...state,
                fetchDistrictsByProvinces: { ...state.fetchDistrictsByProvinces, loading: false }
            };
        case cooperativeActionsTypes.GET_DISTRICTS_BY_PROVINCES_SUCCESS:
            return {
                ...state,
                listOfDistrictsByProvinces: payload.content,
                fetchDistrictsByProvinces: { loading: false, message: payload.message, errors: {} }
            };
        case cooperativeActionsTypes.GET_DISTRICTS_BY_PROVINCES_FAILURE:
            return {
                ...state,
                fetchDistrictsByProvinces: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
