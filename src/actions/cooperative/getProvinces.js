import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/core/api/location-addresses/provinces`,
    onStart: cooperativeActionsTypes.GET_PROVINCES_START,
    onEnd: cooperativeActionsTypes.GET_PROVINCES_END,
    onSuccess: cooperativeActionsTypes.GET_PROVINCES_SUCCESS,
    onFailure: cooperativeActionsTypes.GET_PROVINCES_FAILURE
}));
