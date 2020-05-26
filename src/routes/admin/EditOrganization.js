import ViewEditCooperative from '../../components/AdminSettings/Organizations/ViewEditCooperative';

export default {
   exact: true,
   name: 'Create Organization',
   role: 'ROLE_ADMIN',
   protected: true,
   path: '/edit/cooperative/:id',
   component: ViewEditCooperative,
};



