import { cooperativeActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case cooperativeActionsTypes.CREATE_COOPERATIVE_START:
            return {
                ...state,
                createCooperative: { ...state.createCooperative, message: '', loading: true, errors: {} }
            };
        case cooperativeActionsTypes.CREATE_COOPERATIVE_END:
            return {
                ...state,
                createCooperative: { ...state.createCooperative, loading: false }
            };
        case cooperativeActionsTypes.CREATE_COOPERATIVE_SUCCESS:
        console.log('sucess', payload);
            return {
                ...state,
                createCooperative: { loading: false, message: payload, errors: {} }
            };
        case cooperativeActionsTypes.CREATE_COOPERATIVE_FAILURE:
        console.log('failll ==>', payload);
            return {
                ...state,
                createCooperative: { loading: false, message: '', errors: payload.cooperativeVillageId }
            };
        default:
            return null;
    }
};
