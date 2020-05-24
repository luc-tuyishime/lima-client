import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/core/api/auth/reset-password',
    data: { ...formData },
    onStart: userActionsTypes.RESET_PASSWORD_START,
    onEnd: userActionsTypes.RESET_PASSWORD_END,
    onSuccess: userActionsTypes.RESET_PASSWORD_SUCCESS,
    onFailure: userActionsTypes.RESET_PASSWORD_FAILURE
}));
