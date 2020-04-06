import RolesPermissions from '../../components/AdminSettings/RolesPermissions/RolesPermissions';

export default {
    exact: true,
    name: 'Roles & Permissions',
    protected: true,
    path: '/role-permission',
    component: RolesPermissions
}