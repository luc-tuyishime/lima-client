import Login from './user/Login';
import Register from './user/Register';
import ForgotPassword from './user/ForgotPassword';
import UpdatePassword from './user/UpdateUsingPassword';
import UpdatePasswordPhone from './user/UpdateUsingPhone';
import ActivateAccount from './user/ActivateAccount';
import RolesPermissions from './admin/RolesPermissions';
import ManageUsers from './admin/ManageUsers';
import ViewFarmers from './farmer/ViewFarmers';
import EditFarmer from './farmer/EditFarmer';
import CreateFarmer from './farmer/CreateFarmer';
import ViewMembers from './staffAndEnablers/Members/ViewMembers';
import CreateMember from './staffAndEnablers/Members/CreateMember';
import EditMember from './staffAndEnablers/Members/EditMember';
import CreateEnabler from './staffAndEnablers/Enablers/CreateEnabler';
import EditEnabler from './staffAndEnablers/Enablers/EditEnabler';
import AvailableStock from './stock/AvailableStock';
import OperationStock from './stock/OperationStock';
import RequisitionStock from './stock/RequisitionStock';
import OrderStock from './stock/OrderStock';
import Dashboard from './dashboard/ViewDashboard';
import ViewPetitCash from './finance/ViewPetitCash';
import ViewReports  from './finance/ViewReport';
import ViewApprovals from './finance/ViewApproval';
import ViewNewOperation from './finance/ViewNewOperation';

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
   CreateEnabler,
   EditEnabler,
   AvailableStock,
   OperationStock,
   RequisitionStock,
   OrderStock,
   Dashboard,
   ViewPetitCash,
   ViewReports,
   ViewApprovals,
   ViewNewOperation,
   ActivateAccount
];
