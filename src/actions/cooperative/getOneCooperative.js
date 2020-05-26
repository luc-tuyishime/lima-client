import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/core/api/organizations/${id}`,
    onStart: cooperativeActionsTypes.GET_ONE_COOPERATIVE_START,
    onEnd: cooperativeActionsTypes.GET_ONE_COOPERATIVE_END,
    onSuccess: cooperativeActionsTypes.GET_ONE_COOPERATIVE_SUCCESS,
    onFailure: cooperativeActionsTypes.GET_ONE_COOPERATIVE_FAILURE
}));

