import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.GET_SECTORS_BY_DISTRICTS_START:
            return {
                ...state,
                fetchSectorsByDistricts: { ...state.fetchSectorsByDistricts, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.GET_SECTORS_BY_DISTRICTS_END:
            return {
                ...state,
                fetchSectorsByDistricts: { ...state.fetchSectorsByDistricts, loading: false }
            };
        case cooperativeActionsTypes.GET_SECTORS_BY_DISTRICTS_SUCCESS:
            return {
                ...state,
                listOfSectorsByDistricts: payload.content,
                fetchSectorsByDistricts: { loading: false, message: payload.message, errors: {} }
            };
        case cooperativeActionsTypes.GET_SECTORS_BY_DISTRICTS_FAILURE:
            return {
                ...state,
                fetchSectorsByDistricts: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
