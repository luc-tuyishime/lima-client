import Login from './user/Login';
import Register from './user/Register';
import ForgotPassword from './user/ForgotPassword';
import UpdatePassword from './user/UpdateUsingPassword';
import UpdatePasswordPhone from './user/UpdateUsingPhone';
import RolesPermissions from './admin/RolesPermissions';
import ManageUsers from './admin/ManageUsers';
import ViewFarmers from './farmer/ViewFarmers';
import EditFarmer from './farmer/EditFarmer';
import CreateFarmer from './farmer/CreateFarmer';
import ViewMembers from './staffAndEnablers/Members/ViewMembers';
import CreateMember from './staffAndEnablers/Members/CreateMember';
import EditMember from './staffAndEnablers/Members/EditMember';
import CreateEnabler from './staffAndEnablers/Enablers/CreateEnabler';

export default [
   Login,
   Register,
   ForgotPassword,
   UpdatePassword,
   UpdatePasswordPhone,
   RolesPermissions,
   ManageUsers,
   ViewFarmers,
   EditFarmer,
   CreateFarmer,
   ViewMembers,
   CreateMember,
   EditMember,
   CreateEnabler
];
