import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/core/api/organizations/signup-cooperative',
    data: { ...formData },
    onStart: cooperativeActionsTypes.CREATE_COOPERATIVE_START,
    onEnd: cooperativeActionsTypes.CREATE_COOPERATIVE_END,
    onSuccess: cooperativeActionsTypes.CREATE_COOPERATIVE_SUCCESS,
    onFailure: cooperativeActionsTypes.CREATE_COOPERATIVE_FAILURE
}));
