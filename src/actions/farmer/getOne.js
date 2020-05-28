import { farmerActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/core/api/farmers/${id}`,
    onStart: farmerActionsTypes.GET_ONE_FARMER_START,
    onEnd: farmerActionsTypes.GET_ONE_FARMER_END,
    onSuccess: farmerActionsTypes.GET_ONE_FARMER_SUCCESS,
    onFailure: farmerActionsTypes.GET_ONE_FARMER_FAILURE
}));
