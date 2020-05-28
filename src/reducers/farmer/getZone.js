import { farmerActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case farmerActionsTypes.GET_ZONE_START:
            return {
                ...state,
                getZones: { ...state.getZones, message: '', loading: true, errors: {} }
            };
        case farmerActionsTypes.GET_ZONE_END:
            return {
                ...state,
                getZones: { ...state.getZones, loading: false }
            };
        case farmerActionsTypes.GET_ZONE_SUCCESS:
            return {
                ...state,
                listOfZones: payload.content,
                getZones: { loading: false, message: payload.message, errors: {} }
            };
        case farmerActionsTypes.GET_ZONE_FAILURE:
            return {
                ...state,
                getZones: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
