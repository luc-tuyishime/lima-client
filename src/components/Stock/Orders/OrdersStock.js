import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import OrderStockTable from './OrderStockTable';

import '../../../assets/css/table.scss';
import '../All/stock.scss';

class OrderStock extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<>Stock</>}
                    users={<><span className="blue-color">Orders</span></>} />
                <Grid>
                    <Grid.Column width={3}>
                        <UserSidebar />
                    </Grid.Column>
                    <Grid.Column className="style-role" width={13}>
                        <OrderStockTable />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default OrderStock;
