import { farmerActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case farmerActionsTypes.GET_FARMER_START:
            return {
                ...state,
                getFarmers: { ...state.getFarmers, message: '', loading: true, errors: {} }
            };
        case farmerActionsTypes.GET_FARMER_END:
            return {
                ...state,
                getFarmers: { ...state.getFarmers, loading: false }
            };
        case farmerActionsTypes.GET_FARMER_SUCCESS:
            return {
                ...state,
                listOfFarmers: payload.content,
                getFarmers: { loading: false, message: payload.message, errors: {} }
            };
        case farmerActionsTypes.GET_FARMER_FAILURE:
            return {
                ...state,
                getFarmers: { loading: false, message: '', errors: payload.errors }
            };
        default:
            return null;
    }
};
