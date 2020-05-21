import { organizationActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: '/organizations',
    onStart: organizationActionsTypes.GET_ORGANIZATION_START,
    onEnd: organizationActionsTypes.GET_ORGANIZATION_END,
    onSuccess: organizationActionsTypes.GET_ORGANIZATION_SUCCESS,
    onFailure: organizationActionsTypes.GET_ORGANIZATION_FAILURE
}));
