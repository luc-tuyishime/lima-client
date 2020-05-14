import React, { Component } from 'react';
import {Card, Grid, Search, Button, Icon, Form, Radio, Table, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SemanticDatepicker from "react-semantic-ui-datepickers";

import './ledger.scss';

class ChartOfAccountTable extends Component {
    render() {
        return (
                 <>
                <Grid>
                    <Grid columns={5}>
                      <Grid.Column />
                         <Grid.Column />
                            <Grid.Column />
                            <Grid.Column style={{ position: 'relative', left: '45px', top: '10px' }}>
                                <div>
                                <a className="excel-icon">
                                <Icon name='file excel' color="green" />
                                Export Excel
                                </a>
                                    <a>
                                <Icon name='print' />
                                Print
                                </a>
                            </div>
                            </Grid.Column>
                           <Grid.Column style={{ position: 'relative', left: '55px' }}>
                          <Link to=""><Form.Button style={{marginRight: '35px'}} primary><Icon name="plus"/>Operation</Form.Button></Link>
                        </Grid.Column>
                     </Grid>
                    </Grid>
                        <Table className="table-card" fixed>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Account Type</Table.HeaderCell>
                                <Table.HeaderCell>Code</Table.HeaderCell>
                                <Table.HeaderCell>Type of Operation</Table.HeaderCell>
                                <Table.HeaderCell>Account No.</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>John Lilki</Table.Cell>
                                <Table.Cell>September 14, 2013</Table.Cell>
                                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Jamie Harington</Table.Cell>
                                <Table.Cell>January 11, 2014</Table.Cell>
                                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
            </>
        )
    }
}

export default ChartOfAccountTable