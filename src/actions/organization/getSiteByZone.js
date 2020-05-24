import { organizationActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/core/api/cooperative-sites/cooperative-zone/${id}`,
    onStart: organizationActionsTypes.GET_SITE_BY_ZONE_START,
    onEnd: organizationActionsTypes.GET_SITE_BY_ZONE_END,
    onSuccess: organizationActionsTypes.GET_SITE_BY_ZONE_SUCCESS,
    onFailure: organizationActionsTypes.GET_SITE_BY_ZONE_FAILURE
}));    