import { farmerActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: '/core/api/cooperative-zones/cooperative/589',
    onStart: farmerActionsTypes.GET_ZONE_START,
    onEnd: farmerActionsTypes.GET_ZONE_END,
    onSuccess: farmerActionsTypes.GET_ZONE_SUCCESS,
    onFailure: farmerActionsTypes.GET_ZONE_FAILURE
}));
