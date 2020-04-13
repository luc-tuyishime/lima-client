import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserSidebar from '../../../common/Sidebar/Sidebar';
import Navbar from '../../../common/Navbar/Navbar';
import { MiniNavbar } from '../../../common/Navbar/MiniNavbar';
import ViewMembersTable from './ViewMembersTable';

import '../../../../assets/css/table.scss';

class ViewMembers extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" users={<><span className="blue-color">Staff & Enablers</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <ViewMembersTable />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ViewMembers;
