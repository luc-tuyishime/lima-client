import { farmerActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: '/core/api/farmers',
    onStart: farmerActionsTypes.GET_FARMER_START,
    onEnd: farmerActionsTypes.GET_FARMER_END,
    onSuccess: farmerActionsTypes.GET_FARMER_SUCCESS,
    onFailure: farmerActionsTypes.GET_FARMER_FAILURE
}));
