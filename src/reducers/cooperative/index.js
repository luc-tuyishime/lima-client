import { cooperative as initialState } from '../../store/initialState';

import clearCooperativeStoreReducer from './clearProvinceReducer';
import getProvinces from './getProvinces';
import getDistrictByProvinces from './getDistrictsByProvinces';
import getSectorsByDistricts from './getSectorsByDistricts';


export default (state = initialState, action) => {
    const clearCooperativeStore = clearCooperativeStoreReducer(state, action);
    const get = getProvinces(state, action);
    const getDistrictsByProvinces = getDistrictByProvinces(state, action);
    const getSectorByDistricts = getSectorsByDistricts(state, action);

    return (
        clearCooperativeStore
        || get
        || getDistrictsByProvinces
        || getSectorByDistricts
        || state
    );
};