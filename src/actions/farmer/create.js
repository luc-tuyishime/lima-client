import { farmerActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default formData => dispatch => dispatch(apiAction({
    method: 'post',
    url: '/core/api/farmers',
    data: { ...formData },
    onStart: farmerActionsTypes.CREATE_FARMER_START,
    onEnd: farmerActionsTypes.CREATE_FARMER_END,
    onSuccess: farmerActionsTypes.CREATE_FARMER_SUCCESS,
    onFailure: farmerActionsTypes.CREATE_FARMER_FAILURE
}));
