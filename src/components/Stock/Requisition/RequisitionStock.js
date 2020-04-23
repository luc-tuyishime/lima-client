import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import RequisitionForms from './RequisitionForms';

import '../../../assets/css/table.scss';
import '../All/stock.scss';

class RequisitionStock extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Stock</>}
                    users={<><span className="blue-color">Requisitions</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <RequisitionForms />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default RequisitionStock;
