import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: '/core/api/organizations',
    onStart: cooperativeActionsTypes.GET_COOPERATIVE_START,
    onEnd: cooperativeActionsTypes.GET_COOPERATIVE_END,
    onSuccess: cooperativeActionsTypes.GET_COOPERATIVE_SUCCESS,
    onFailure: cooperativeActionsTypes.GET_COOPERATIVE_FAILURE
}));
