import ViewCreateOrganization from '../../components/AdminSettings/Organizations/ViewCreateOrganization';

export default {
   exact: true,
   name: 'Create Organization',
   role: 'ROLE_ADMIN',
   protected: true,
   path: '/organization',
   component: ViewCreateOrganization,
};



