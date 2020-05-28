import { farmer as initialState } from '../../store/initialState';

import createFarmer from './createFarmer';
import clearFarmerStore from './clearFarmerReducer';
import getFarmers from './getFarmer';
import getZone from './getZone';
import deleteFarmer from './deleteFarmer';
import getOneFarmer from './getOneFarmer';

export default (state = initialState, action) => {
    
    const clearFarmers = clearFarmerStore(state, action);
    const createFarmers = createFarmer(state, action);
    const get = getFarmers(state, action);
    const getZones = getZone(state, action);
    const deleteFarmers = deleteFarmer(state, action);
    const getOneFarmerr = getOneFarmer(state, action);

    return (
        clearFarmers
        || createFarmers
        || get
        || getZones
        || deleteFarmers
        || getOneFarmerr
        || state
    );
};