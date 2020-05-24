import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/core/api/auth/signup',
    data: { ...formData },
    onStart: userActionsTypes.CREATE_USER_START,
    onEnd: userActionsTypes.CREATE_USER_END,
    onSuccess: userActionsTypes.CREATE_USER_SUCCESS,
    onFailure: userActionsTypes.CREATE_USER_FAILURE
}));
