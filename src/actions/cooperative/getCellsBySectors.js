import { cooperativeActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (id) => dispatch => dispatch(apiAction({
    method: 'get',
    url: `/location-addresses/cells/sector/${id}`,
    onStart: cooperativeActionsTypes.GET_CELLS_BY_SECTORS_START,
    onEnd: cooperativeActionsTypes.GET_CELLS_BY_SECTORS_END,
    onSuccess: cooperativeActionsTypes.GET_CELLS_BY_SECTORS_SUCCESS,
    onFailure: cooperativeActionsTypes.GET_CELLS_BY_SECTORS_FAILURE
}));