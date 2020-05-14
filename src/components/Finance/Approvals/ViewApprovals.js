import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import ApprovalTable from './ApprovalTable';

import '../../../assets/css/table.scss';
import '../../Stock/All/stock.scss';

class ViewApprovals extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Finance</>}
                    users={<><span className="blue-color">Approvals</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <ApprovalTable />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ViewApprovals;
