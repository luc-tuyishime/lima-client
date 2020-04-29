import React, { Component } from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import UserSidebar from '../common/Sidebar/Sidebar';
import Navbar from '../common/Navbar/Navbar';
import { MiniNavbar } from '../common/Navbar/MiniNavbar';
import SmallListCard from './SmallListCard';
import TableDashboard from './Table';

import '../../assets/css/table.scss';
import './Dashboard.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<><span className="blue-color">Dashboard</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column id="scroll-dashbord" className="style-dashbord-container">
                        <SmallListCard />
                          <Grid className="dashboard-padding">
                            <Grid.Row>
                            <Grid.Column width={8}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                            </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                            <Grid.Column width={9}>
                                <TableDashboard />
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
