import { organizationActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case organizationActionsTypes.GET_ZONE_BY_COOPERATIVE_START:
            return {
                ...state,
                fetchZoneByCooperative: { ...state.fetchZoneByCooperative, message: '', loading: true, errors: {} }
            };
        case organizationActionsTypes.GET_ZONE_BY_COOPERATIVE_END:
            return {
                ...state,
                fetchZoneByCooperative: { ...state.fetchZoneByCooperative, loading: false }
            };
        case organizationActionsTypes.GET_ZONE_BY_COOPERATIVE_SUCCESS:
            return {
                ...state,
                listOfZoneByCooperative: payload.content,
                fetchZoneByCooperative: { loading: false, message: payload.message, errors: {} }
            };
        case organizationActionsTypes.GET_ZONE_BY_COOPERATIVE_FAILURE:
            return {
                ...state,
                fetchZoneByCooperative: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
