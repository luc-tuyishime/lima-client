import React, { Component } from 'react';
import { Grid, Card, Tab, Divider } from 'semantic-ui-react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import AddNewStock from './AddNewStock';
import AvailableStockTable from './AvailableStockTable';

import '../../../assets/css/table.scss';
import './stock.scss';

const colors = [
    'blue',
]

class AvailableStock extends Component {

    state = {
        color: colors[0],
    }

    handleColorChange = (e) => this.setState({ color: e.target.value })

    render() {
        const { color, border } = this.state

        const panes = [
            {
                menuItem: 'Available stock',
                render: () =>
                    <Tab.Pane className="tab-members" attached={false}>
                        <AvailableStockTable />
                    </Tab.Pane>,
            },
            {
                menuItem: 'Add new stock',
                render: () => <Tab.Pane className="tab-members" attached={false}>
                    <AddNewStock />
                </Tab.Pane>,
            },
        ]

        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<><span className="blue-color">Stock</span></>}
                    users={<><span className="blue-color">All</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <Card.Group className="table-card">
                            <Card fluid>
                                <Card.Content>
                                    <Divider hidden />
                                    <Tab
                                        menu={{ color, inverted: true, attached: false, tabular: false }}
                                        panes={panes}
                                    />
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default AvailableStock;
