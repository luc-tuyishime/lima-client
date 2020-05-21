import { organization as initialState } from '../../store/initialState';

import getOrganization from './getOrganization';
import getZoneByCooperative from './getZoneByCooperative';
import getSiteByZone from './getSiteByZone';

export default (state = initialState, action) => {

    const getOrganizations = getOrganization(state, action);
    const getZone = getZoneByCooperative(state, action);
    const getSite = getSiteByZone(state, action);

    return (
        getOrganizations
        || getZone
        || getSite
        || state
    );
};