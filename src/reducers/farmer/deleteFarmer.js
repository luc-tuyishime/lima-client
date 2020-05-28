import { farmerActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case farmerActionsTypes.DELETE_FARMER_START:
            return {
                ...state,
                deleteFarmer: { ...state.deleteFarmer, message: '', loading: true, errors: {} }
            };
        case farmerActionsTypes.DELETE_FARMER_END:
            return {
                ...state,
                deleteFarmer: { ...state.deleteFarmer, loading: false }
            };
        case farmerActionsTypes.DELETE_FARMER_SUCCESS:
            return {
                ...state,
                deleteFarmer: { loading: false, message: payload.message, errors: {} }
            };
        case farmerActionsTypes.DELETE_FARMER_FAILURE:
        console.log('failure ==>', payload);
            return {
                ...state,
                deleteFarmer: { loading: false, message: '', errors: payload }
            };
        default:
            return null;
    }
};
