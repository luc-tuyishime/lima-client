import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import ViewFarmersTable from './ViewFarmersTable';

import '../../../assets/css/table.scss';

class ViewFarmers extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Farmers</>} users={<><span className="blue-color">All</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <ViewFarmersTable />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ViewFarmers;
