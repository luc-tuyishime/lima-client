import React, { Component } from 'react';
import { Card, Grid, Search, Button, Icon, Form, Radio, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SemanticDatepicker from "react-semantic-ui-datepickers";

// import '../ledger/ledger.scss';

class IncomingStatementTable extends Component {
    render() {
        return (
            <>
                <Grid columns='equal'>
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
                    <Grid.Column width={3}>
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
                <Table className="table-card">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Account type</Table.HeaderCell>
                            <Table.HeaderCell>Type of operation</Table.HeaderCell>
                            <Table.HeaderCell>Statement category</Table.HeaderCell>
                            <Table.HeaderCell>2020</Table.HeaderCell>
                            <Table.HeaderCell>2019</Table.HeaderCell>
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
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-table-blue">
                            <Table.Cell>Old balance</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='left'>xxxxx</Table.Cell>
                            <Table.Cell textAlign='left'>45,000</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-table-orange">
                            <Table.Cell>Journal totlals</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='left'>xxxxx</Table.Cell>
                            <Table.Cell textAlign='left'>12,333</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-table-green">
                            <Table.Cell>New balance</Table.Cell>
                            <Table.Cell></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='right'></Table.Cell>
                            <Table.Cell textAlign='left'>xxxxx</Table.Cell>
                            <Table.Cell textAlign='left'>164,000</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>                  
            </>
        )
    }
}

export default IncomingStatementTable