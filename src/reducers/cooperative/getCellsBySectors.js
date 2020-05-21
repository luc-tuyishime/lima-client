import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.GET_CELLS_BY_SECTORS_START:
            return {
                ...state,
                fetchCellsBySectors: { ...state.fetchCellsBySectors, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.GET_CELLS_BY_SECTORS_END:
            return {
                ...state,
                fetchCellsBySectors: { ...state.fetchCellsBySectors, loading: false }
            };
        case cooperativeActionsTypes.GET_CELLS_BY_SECTORS_SUCCESS:
            return {
                ...state,
                listOfCellsBySectors: payload.content,
                fetchCellsBySectors: { loading: false, message: payload.message, errors: {} }
            };
        case cooperativeActionsTypes.GET_CELLS_BY_SECTORS_FAILURE:
            return {
                ...state,
                fetchCellsBySectors: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
