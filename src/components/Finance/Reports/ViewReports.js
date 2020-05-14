import React, { Component } from 'react';
import { Grid, Card, Tab, Divider } from 'semantic-ui-react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import { MiniNavbar } from '../../common/Navbar/MiniNavbar';
import BalanceSheetTable from './BalanceSheet';
import GeneralJournalTable from './GeneralJournal';
import LedgerTable from './ledger';
import TrialBalanceTable from './TrialBalance';
import ChartOfAccountTable from './ChartOfAccounts';
import IncomingStatementTable from './IncomeStatement';

import '../../../assets/css/table.scss';
import '../ViewFinance.scss';

const colors = [
    'blue',
]

class ViewReports extends Component {

    state = {
        color: colors[0],
    }

    handleColorChange = (e) => this.setState({ color: e.target.value })

    render() {
        const { color, border } = this.state

        const panes = [
            {
                menuItem: 'General Journal',
                render: () =>
                    <Tab.Pane className="tab-members" attached={false}>
                       <GeneralJournalTable />
                    </Tab.Pane>,
            },
            {
                menuItem: 'Trial Balance',
                render: () => <Tab.Pane className="tab-members" attached={false}>
                   <TrialBalanceTable />
                </Tab.Pane>,
            },
            {
                menuItem: 'Balance sheet',
                render: () => <Tab.Pane className="tab-members" attached={false}>
                   <BalanceSheetTable />
                </Tab.Pane>,
            },
             {
                menuItem: 'Ledger',
                render: () => <Tab.Pane className="tab-members" attached={false}>
                   <LedgerTable />
                </Tab.Pane>,
            },
            {
                menuItem: 'Income Statement',
                render: () => <Tab.Pane className="tab-members" attached={false}>
                   <IncomingStatementTable />
                </Tab.Pane>,
            },
            {
                menuItem: 'Chart of accounts',
                render: () => <Tab.Pane className="tab-members" attached={false}>
                   <ChartOfAccountTable />
                </Tab.Pane>,
            },
        ]

        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar home="Home" settings={<><span className="blue-color">Finance</span></>}
                    users={<><span className="blue-color">Reports</span></>} />
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

export default ViewReports;
