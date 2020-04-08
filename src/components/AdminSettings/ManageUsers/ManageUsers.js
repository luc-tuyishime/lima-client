import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import ManageUsersTable from './ManageUsersTable';

import '../../../assets/css/table.scss';

class ManageUsers extends Component {
   render() {
      return (
         <div className="bg-container">
            <Navbar />
            <MiniNavbar home="Home" settings={<>Settings</>} users={<><span className="blue-color">Manage Users</span></>} />
            <Grid>
               <Grid.Column width={3}>
                  <UserSidebar />
               </Grid.Column>
               <Grid.Column width={13}>
                  <ManageUsersTable />
               </Grid.Column>
            </Grid>
         </div>
      );
   }
}

export default ManageUsers;
