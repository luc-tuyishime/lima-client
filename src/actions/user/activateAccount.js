import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/core/api/auth/activate-account',
    data: { ...formData },
    onStart: userActionsTypes.ACTIVATE_ACCOUNT_START,
    onEnd: userActionsTypes.ACTIVATE_ACCOUNT_END,
    onSuccess: userActionsTypes.ACTIVATE_ACCOUNT_SUCCESS,
    onFailure: userActionsTypes.ACTIVATE_ACCOUNT_FAILURE
}));
