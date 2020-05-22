import { farmerActionsTypes } from '../../actions-types';

export default (state, { type }) => {
    switch (type) {
        case farmerActionsTypes.CLEAR_FARMER_STORE:
            return {
                ...state,
                createFarmer: {
                    loading: false,
                    message: '',
                    errors: {}
                },
            };

        default:
            return null;
    }
};
