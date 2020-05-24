import { organizationActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/core/api/cooperative-zones/cooperative/${id}`,
    onStart: organizationActionsTypes.GET_ZONE_BY_COOPERATIVE_START,
    onEnd: organizationActionsTypes.GET_ZONE_BY_COOPERATIVE_END,
    onSuccess: organizationActionsTypes.GET_ZONE_BY_COOPERATIVE_SUCCESS,
    onFailure: organizationActionsTypes.GET_ZONE_BY_COOPERATIVE_FAILURE
}));