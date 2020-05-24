import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/core/api/location-addresses/sectors/district/${id}`,
    onStart: cooperativeActionsTypes.GET_SECTORS_BY_DISTRICTS_START,
    onEnd: cooperativeActionsTypes.GET_SECTORS_BY_DISTRICTS_END,
    onSuccess: cooperativeActionsTypes.GET_SECTORS_BY_DISTRICTS_SUCCESS,
    onFailure: cooperativeActionsTypes.GET_SECTORS_BY_DISTRICTS_FAILURE
}));