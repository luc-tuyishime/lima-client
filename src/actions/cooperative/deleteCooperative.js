import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'delete',
    url: `/core/api/organizations/${id}`,
    onStart: cooperativeActionsTypes.DELETE_COOPERATIVE_START,
    onEnd: cooperativeActionsTypes.DELETE_COOPERATIVE_END,
    onSuccess: cooperativeActionsTypes.DELETE_COOPERATIVE_SUCCESS,
    onFailure: cooperativeActionsTypes.DELETE_COOPERATIVE_FAILURE
}));
