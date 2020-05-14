import React, { Component } from 'react';
import {Card, Grid, Search, Button, Icon, Form, Radio, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SemanticDatepicker from "react-semantic-ui-datepickers";

import './ledger.scss';

class TrialBalanceTable extends Component {
    render() {
        return (
          <>
            <Grid>
             
                <Grid.Column floated='left' width={5}>
                <Form>
                    <Form.Group>
                            <Search
                            className="search"
                            fluid
                            icon="search"
                            placeholder="Search..."
                            />
                        <Form.Button primary className="btn-search">Search</Form.Button>
                    </Form.Group>
                </Form>
                </Grid.Column>
                 <Grid.Column width={4}>
                    <div style={{ position: 'relative', top: '10px' }}>
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
                </Grid>
                    <Table className="table-card" fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Reference</Table.HeaderCell>
                            <Table.HeaderCell>Particulars</Table.HeaderCell>
                            <Table.HeaderCell>Debit</Table.HeaderCell>
                            <Table.HeaderCell>Credit</Table.HeaderCell>
                            <Table.HeaderCell>Balance</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>John Lilki</Table.Cell>
                            <Table.Cell>September 14, 2013</Table.Cell>
                            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie Harington</Table.Cell>
                            <Table.Cell>January 11, 2014</Table.Cell>
                            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-table-blue">
                            <Table.Cell>Balance</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='left'>45,000</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-table-orange">
                            <Table.Cell>Totals</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='left'>12,333</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    }
}

export default TrialBalanceTable