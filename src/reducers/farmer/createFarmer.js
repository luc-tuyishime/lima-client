import { farmerActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case farmerActionsTypes.CREATE_FARMER_START:
            return {
                ...state,
                createFarmer: { ...state.createFarmer, message: '', loading: true, errors: {} }
            };
        case farmerActionsTypes.CREATE_FARMER_END:
            return {
                ...state,
                createFarmer: { ...state.createFarmer, loading: false }
            };
        case farmerActionsTypes.CREATE_FARMER_SUCCESS:
            return {
                ...state,
                createFarmer: { loading: false, message: payload.message, errors: {} }
            };
        case farmerActionsTypes.CREATE_FARMER_FAILURE:
        console.log('failure ==>', payload);
            return {
                ...state,
                createFarmer: { loading: false, message: '', errors: payload }
            };
        default:
            return null;
    }
};
