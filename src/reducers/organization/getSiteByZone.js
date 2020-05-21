import { organizationActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case organizationActionsTypes.GET_SITE_BY_ZONE_START:
            return {
                ...state,
                fetchSiteByZone: { ...state.fetchSiteByZone, message: '', loading: true, errors: {} }
            };
        case organizationActionsTypes.GET_SITE_BY_ZONE_END:
            return {
                ...state,
                fetchSiteByZone: { ...state.fetchSiteByZone, loading: false }
            };
        case organizationActionsTypes.GET_SITE_BY_ZONE_SUCCESS:
            return {
                ...state,
                listOfSiteByZone: payload.content,
                fetchSiteByZone: { loading: false, message: payload.message, errors: {} }
            };
        case organizationActionsTypes.GET_SITE_BY_ZONE_FAILURE:
            return {
                ...state,
                fetchSiteByZone: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
