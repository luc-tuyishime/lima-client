import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import EditFarmerForms from './EditFarmerForms';

import '../../../assets/css/table.scss';

class EditFarmers extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Farmers</>} users={<><span className="blue-color">All</span></>} >
                    <Link to='/view-farmers'> <Icon name='arrow left' />Back</Link>
                </MiniNavbar>
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <EditFarmerForms />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default EditFarmers;
