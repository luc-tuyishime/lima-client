import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/location-addresses/districts/province/${id}`,
    onStart: cooperativeActionsTypes.GET_DISTRICTS_BY_PROVINCES_START,
    onEnd: cooperativeActionsTypes.GET_DISTRICTS_BY_PROVINCES_END,
    onSuccess: cooperativeActionsTypes.GET_DISTRICTS_BY_PROVINCES_SUCCESS,
    onFailure: cooperativeActionsTypes.GET_DISTRICTS_BY_PROVINCES_FAILURE
}));