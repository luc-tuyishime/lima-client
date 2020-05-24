import { farmer as initialState } from '../../store/initialState';

import createFarmer from './createFarmer';
import clearFarmerStore from './clearFarmerReducer';
import getFarmers from './getFarmer';

export default (state = initialState, action) => {
    
    const clearFarmers = clearFarmerStore(state, action);
    const createFarmers = createFarmer(state, action);
    const get = getFarmers(state, action);

    return (
        clearFarmers
        || createFarmers
        || get
        || state
    );
};