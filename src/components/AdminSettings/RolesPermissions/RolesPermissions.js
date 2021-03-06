import React, { Component } from 'react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import { Grid } from 'semantic-ui-react';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import RolePermissionTable from './RolesPermissionsTable';

import '../../../assets/css/table.scss';

class RolesPermissions extends Component {
   render() {
      return (
         <div className="bg-container">
            <Navbar />
            <MiniNavbar home="Home" settings={<>Settings</>}
               users={<><span className="blue-color">Roles & Permissions</span></>} />
            <Grid>
               <Grid.Column width={3}>
                  <UserSidebar />
               </Grid.Column>
               <Grid.Column className="style-role" width={13}>
                  <RolePermissionTable />
               </Grid.Column>
            </Grid>
         </div>
      );
   }
}

export default RolesPermissions;
