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
                <MiniNavbar home="Home" settings={<><span className="blue-color">Staff & Enablers</span></>}
                    users={<>Enablers</>} new={<><span className="blue-color">New</span></>} />
                <Grid>
                    <Grid.Column width={4}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={11}>
                        <MainForm />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
 
export default CreateEnabler;
