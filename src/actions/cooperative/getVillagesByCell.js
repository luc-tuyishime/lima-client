import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/core/api/location-addresses/villages/cell/${id}`,
    onStart: cooperativeActionsTypes.GET_VILLAGE_BY_CELL_START,
    onEnd: cooperativeActionsTypes.GET_VILLAGE_BY_CELL_END,
    onSuccess: cooperativeActionsTypes.GET_VILLAGE_BY_CELL_SUCCESS,
    onFailure: cooperativeActionsTypes.GET_VILLAGE_BY_CELL_FAILURE
}));