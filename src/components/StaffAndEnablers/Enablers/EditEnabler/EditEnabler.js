import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon } from 'semantic-ui-react';
import UserSidebar from '../../../common/Sidebar/Sidebar';
import Navbar from '../../../common/Navbar/Navbar';
import { MiniNavbar } from '../../../common/Navbar/MiniNavbar';
import EditEnablerForm from './EditEnablerForm';

import '../../../../assets/css/table.scss';
import './EditEnabler.scss';

class EditEnabler extends Component {
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
                    <Grid.Column className="width-edit-enabler" width={13}>
                        <EditEnablerForm />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default EditEnabler;
