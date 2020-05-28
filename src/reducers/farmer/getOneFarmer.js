import { farmerActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case farmerActionsTypes.GET_ONE_FARMER_START:
            return {
                ...state,
                fetchOneFarmer: { ...state.fetchOneFarmer, message: '', loading: true, errors: {} }
            };
        case farmerActionsTypes.GET_ONE_FARMER_END:
            return {
                ...state,
                fetchOneFarmer: { ...state.fetchOneFarmer, loading: false }
            };
        case farmerActionsTypes.GET_ONE_FARMER_SUCCESS:
        console.log('Success', payload);
            return {
                ...state,
                listOneFarmer: payload,
                fetchOneFarmer: { loading: false, message: payload.message, errors: {} }
            };
        case farmerActionsTypes.GET_ONE_FARMER_FAILURE:
        console.log('failure ==>', payload);
            return {
                ...state,
                fetchOneFarmer: { loading: false, message: '', errors: payload }
            };
        default:
            return null;
    }
};
