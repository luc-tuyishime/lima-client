import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (formData, id) => dispatch => dispatch(apiAction({
    method: 'put',
    url: `/core/api/organizations/${id}`,
    data: { ...formData },
    onStart: cooperativeActionsTypes.UPDATE_COOPERATIVE_START,
    onEnd: cooperativeActionsTypes.UPDATE_COOPERATIVE_END,
    onSuccess: cooperativeActionsTypes.UPDATE_COOPERATIVE_SUCCESS,
    onFailure: cooperativeActionsTypes.UPDATE_COOPERATIVE_FAILURE
}));
