import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/auth/signin',
    data: { ...formData },
    onStart: userActionsTypes.LOGIN_USER_START,
    onEnd: userActionsTypes.LOGIN_USER_END,
    onSuccess: userActionsTypes.LOGIN_USER_SUCCESS,
    onFailure: userActionsTypes.LOGIN_USER_FAILURE
}));
