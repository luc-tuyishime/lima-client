import { cooperative as initialState } from '../../store/initialState';

import clearCooperativeStoreReducer from './clearProvinceReducer';
import getProvinces from './getProvinces';
import getDistrictByProvinces from './getDistrictsByProvinces';
import getSectorsByDistricts from './getSectorsByDistricts';
import getCellsBySectors from './getCellsBySectors';
import getVillagesByCell from './getVillagesByCell';
import createCooperative from './createCooperative';
import getCooperative from './getCooperative';
import getOneCooperative from './getOneCooperative';
import updateCooperative from './updateCooperative';
import deleteCooperative from './deleteCooperative';


export default (state = initialState, action) => {
    const clearCooperativeStore = clearCooperativeStoreReducer(state, action);
    const get = getProvinces(state, action);
    const getDistrictsByProvinces = getDistrictByProvinces(state, action);
    const getSectorByDistricts = getSectorsByDistricts(state, action);
    const getCells = getCellsBySectors(state, action);
    const getVillages = getVillagesByCell(state, action);
    const create = createCooperative(state, action);
    const getCooperatives = getCooperative(state, action);
    const OneCooperative = getOneCooperative(state, action);
    const update = updateCooperative(state, action);
    const deleteCooperatives = deleteCooperative(state, action);

    return (
        clearCooperativeStore
        || get
        || getDistrictsByProvinces
        || getSectorByDistricts
        || getCells
        || getVillages
        || create
        || getCooperatives
        || OneCooperative
        || update
        || deleteCooperatives
        || state
    );
};