import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import NewOperationForms from './NewOperationForms';

import '../../../assets/css/table.scss';
import '../../Stock/All/stock.scss';

class ViewNewOperation extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Finance</>}
                    users={<><span className="blue-color">New Operation</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <NewOperationForms />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ViewNewOperation;
