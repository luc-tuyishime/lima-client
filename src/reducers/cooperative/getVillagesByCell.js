import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.GET_VILLAGE_BY_CELL_START:
            return {
                ...state,
                fetchVillagesByCell: { ...state.fetchVillagesByCell, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.GET_VILLAGE_BY_CELL_END:
            return {
                ...state,
                fetchVillagesByCell: { ...state.fetchVillagesByCell, loading: false }
            };
        case cooperativeActionsTypes.GET_VILLAGE_BY_CELL_SUCCESS:
            return {
                ...state,
                listOfVillagesByCell: payload.content,
                fetchVillagesByCell: { loading: false, message: payload.message, errors: {} }
            };
        case cooperativeActionsTypes.GET_VILLAGE_BY_CELL_FAILURE:
            return {
                ...state,
                fetchVillagesByCell: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
