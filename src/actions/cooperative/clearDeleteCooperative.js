import { cooperativeActionsTypes } from '../../actions-types';

export const clearDeleteCooperative = payload => dispatch => dispatch({
  type: cooperativeActionsTypes.CLEAR_DELETE_COOPERATIVE_STORE,
  payload
});