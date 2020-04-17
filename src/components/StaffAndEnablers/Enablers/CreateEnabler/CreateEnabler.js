import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import UserSidebar from '../../../common/Sidebar/Sidebar';
import Navbar from '../../../common/Navbar/Navbar';
import { MiniNavbar } from '../../../common/Navbar/MiniNavbar';
import MainForm from './CreateEnablerForms/mainForm';

import '../../../../assets/css/table.scss';

class CreateEnabler extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Staff & Enablers</>}
                    users={<>Enablers</>} other={<><span className="blue-color">New</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <MainForm />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default CreateEnabler;
