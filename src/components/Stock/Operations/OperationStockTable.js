import React, { Component } from 'react';
import {Card, Grid, Search, Button, Icon, Form, Radio, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SemanticDatepicker from "react-semantic-ui-datepickers";

import './operation.scss';

class OperationStockTable extends Component {
    render() {
        return (
            <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content className="header-bg-color">
                            Stock operations
                        </Card.Content>
                        <Card.Content>
                            <Grid>
                                <Grid.Column  floated='right' width={8}>
                                     <Form>
                                        <Form.Group>
											<SemanticDatepicker
                                                placeholder="From"
												name='birth'
											/>
											<SemanticDatepicker
                                                placeholder="To"
												name='birth'
											/>
                                            <Form.Button primary className="btn-search"><Icon name='search' />Search</Form.Button>
                                        </Form.Group>
                                        </Form>
                                </Grid.Column>
                                  <Grid.Column  floated='right' width={6}>
                                  <span>Date: </span>
                                    <Radio className="radio-margin" label='All' />
                                    <Radio className="radio-margin" label='Current month' />
                                    <Radio className="radio-margin" label='Last month' />
                                </Grid.Column>
                                <Grid.Column floated='right' width={2}>
                                   <div className="print-style">
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
                                    <Table.HeaderCell>Product name</Table.HeaderCell>
                                    <Table.HeaderCell>Category</Table.HeaderCell>
                                    <Table.HeaderCell>Operation Type</Table.HeaderCell>
                                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                                    <Table.HeaderCell>Balance</Table.HeaderCell>
                                    <Table.HeaderCell>Unit of measure</Table.HeaderCell>
                                    <Table.HeaderCell>Unit price (Frw)</Table.HeaderCell>
                                    <Table.HeaderCell>Total amount</Table.HeaderCell>
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
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill Lewis</Table.Cell>
                                    <Table.Cell>May 11, 2014</Table.Cell>
                                    <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                    <Table.Cell>NO</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        </Card.Content>
                    </Card>
                </Card.Group>
        )
    }
}

export default OperationStockTable