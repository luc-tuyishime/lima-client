import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon } from 'semantic-ui-react';
import UserSidebar from '../../../common/Sidebar/Sidebar';
import Navbar from '../../../common/Navbar/Navbar';
import { MiniNavbar } from '../../../common/Navbar/MiniNavbar';
import EditMemberForms from './EditMemberForm';

import '../../../../assets/css/table.scss';

class EditMember extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Staff & Enablers</>}
                    users={<><span className="blue-color">Individual</span></>}
                ><Link to='/view-members'> <Icon name='arrow left' />Back</Link></MiniNavbar>
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <EditMemberForms />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default EditMember;
