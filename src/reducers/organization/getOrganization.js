import { organizationActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case organizationActionsTypes.GET_ORGANIZATION_START:
            return {
                ...state,
                fetchOrganizations: { ...state.fetchOrganizations, message: '', loading: true, errors: {} }
            };
        case organizationActionsTypes.GET_ORGANIZATION_END:
            return {
                ...state,
                fetchOrganizations: { ...state.fetchOrganizations, loading: false }
            };
        case organizationActionsTypes.GET_ORGANIZATION_SUCCESS:
            return {
                ...state,
                listOfOrganization: payload.content,
                fetchOrganizations: { loading: false, message: payload.message, errors: {} }
            };
        case organizationActionsTypes.GET_ORGANIZATION_FAILURE:
            return {
                ...state,
                fetchOrganizations: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
