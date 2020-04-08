import ManageUsers from '../../components/AdminSettings/ManageUsers/ManageUsers';

export default {
   exact: true,
   name: 'Manage Users',
   protected: true,
   path: '/manage-users',
   component: ManageUsers,
};
