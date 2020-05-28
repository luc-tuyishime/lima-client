import { farmerActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'delete',
    url: `/core/api/farmers/${id}`,
    onStart: farmerActionsTypes.DELETE_FARMER_START,
    onEnd: farmerActionsTypes.DELETE_FARMER_END,
    onSuccess: farmerActionsTypes.DELETE_FARMER_SUCCESS,
    onFailure: farmerActionsTypes.DELETE_FARMER_FAILURE
}));
