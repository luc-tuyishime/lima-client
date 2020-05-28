import EditFarmer from '../../components/Farmers/EditFarmer/EditFarmer';

export default {
    exact: true,
    name: 'Edit Farmer',
    protected: true,
    path: '/edit-farmer/:id',
    component: EditFarmer,
};
