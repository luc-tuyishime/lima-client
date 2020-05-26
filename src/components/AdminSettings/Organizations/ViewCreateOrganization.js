import React, { Component } from 'react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import { Grid, Card, Divider, Tab } from 'semantic-ui-react';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import CreateOrganizationForm from './CreateCooperativeForm';
import DisplayCooperative from './displayOrganizations';

import '../../../assets/css/table.scss';

const colors = [
    'blue',
]

class ViewCreateOrganization extends Component {

   state = {
        color: colors[0],
    }

    handleColorChange = (e) => this.setState({ color: e.target.value })

    render() {
        const { color, border } = this.state

        const panes = [
            {
                menuItem: 'View',
                render: () =>
                    <Tab.Pane className="tab-members" attached={false}>
                       <DisplayCooperative />
                    </Tab.Pane>,
            },
            {
                menuItem: 'Create',
                render: () => <Tab.Pane className="tab-members" attached={false}>
                    <CreateOrganizationForm />
                </Tab.Pane>,
            },
        ]

        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Settings</>}
                users={<><span className="blue-color">Organization</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                                    <Tab
                                        menu={{ color, inverted: true, attached: false, tabular: false }}
                                        panes={panes}
                                    />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default ViewCreateOrganization;
