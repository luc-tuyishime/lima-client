import React, { Component } from 'react';
import { Card, Grid, Search, Button, Icon, Form, Radio, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SemanticDatepicker from "react-semantic-ui-datepickers";

import './ledger.scss';

class BalanceSheetTable extends Component {
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
                <Table striped>
                    <Table.Header style={{ background: 'blue' }}>
                        <Table.Row className="bg-color-sheet">
                            <Table.HeaderCell className="bg-color-sheet">Assets</Table.HeaderCell>
                            <Table.HeaderCell className="bg-color-sheet" textAlign='right'></Table.HeaderCell>
                            <Table.HeaderCell className="bg-color-sheet" textAlign='right'>2020</Table.HeaderCell>
                            <Table.HeaderCell className="bg-color-sheet" textAlign='right'>2019</Table.HeaderCell>
                            <Table.HeaderCell className="bg-color-sheet" textAlign='right'>2018</Table.HeaderCell>
                            <Table.HeaderCell className="bg-color-sheet" textAlign='right'>2017</Table.HeaderCell>
                            <Table.HeaderCell className="bg-color-sheet" textAlign='right'>2016</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Header>
                        <Table.Row className="row-height">
                            <Table.HeaderCell className="bg-color-sheet2" colSpan='3'>Current assets</Table.HeaderCell>
                            <Table.HeaderCell className="bg-color-sheet2" textAlign='right' />
                            <Table.HeaderCell className="bg-color-sheet2" textAlign='right' />
                            <Table.HeaderCell className="bg-color-sheet2" textAlign='right' />
                            <Table.HeaderCell className="bg-color-sheet2" textAlign='right' />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row textAlign='right' verticalAlign='top'>
                            <Table.Cell textAlign='left'>
                                Cash
                            <br />
                            Account recievable<br />
                            Inventory<br />
                            Prepare expenses<br />
                            Short-term investments<br />
                            </Table.Cell>
                            <Table.Cell textAlign='right'>

                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </Table.Cell>
                            <Table.Cell >
                                23,000
                            <br />
                            -<br />
                            -<br />
                            -30,0000<br />
                            -<br />
                            </Table.Cell>
                            <Table.Cell verticalAlign='top'>
                                22,000
                            <br />
                            1<br />
                            2<br />
                            2<br />
                            2<br />
                            </Table.Cell>
                            <Table.Cell verticalAlign='top'>
                                23,222
                            <br />
                            1<br />
                            2<br />
                            2<br />
                            2<br />
                            </Table.Cell>
                            <Table.Cell verticalAlign='top'>
                                23,2323
                            <br />
                            1<br />
                            2<br />
                            2<br />
                            2<br />
                            </Table.Cell>
                            <Table.Cell verticalAlign='top'>
                                12,2222
                            <br />
                            1<br />
                            2<br />
                            2<br />
                            2<br />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row textAlign='right'>
                            <Table.Cell textAlign='left'></Table.Cell>
                            <Table.Cell verticalAlign='middle'>
                                Total current assets<br />
                            </Table.Cell>
                            <Table.Cell>
                                23,4444
                            <br />
                            </Table.Cell>
                            <Table.Cell>
                                44,444
                            <br />
                            </Table.Cell>
                            <Table.Cell>
                                43,4233
                            <br />
                            </Table.Cell>
                            <Table.Cell>
                                22,2222
                            <br />
                            </Table.Cell>
                            <Table.Cell>
                                86,447
                            <br />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    }
}

export default BalanceSheetTable