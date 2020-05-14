import React, { Component } from 'react';
import {Card, Grid, Search, Button, Icon, Form, Radio, Table, Select, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SemanticDatepicker from "react-semantic-ui-datepickers";

import { village } from "../../../helpers/userRegistration/villages";


class PetitCashTable extends Component {

    state = { open: false }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state
        return (
            <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content className="header-bg-color">
                            Petty Cash
                        </Card.Content>
                        <Card.Content>
                          <Grid>
                            <Grid.Row>
                                <Grid.Column  floated='right' width={16}>
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
                                            <Form.Button primary className="btn-search">Search</Form.Button>
                                        </Form.Group>
                                        </Form>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                <Grid.Column  floated='left' width={5}>
                                    <span>Date: </span>
                                    <Radio className="radio-margin" label='All' />
                                    <Radio className="radio-margin" label='Current month' />
                                    <Radio className="radio-margin" label='Last month' />
                                </Grid.Column>
                                <Grid.Column floated='left' width={3}>
                                    <div className="print-style">
                                        <a>
                                        <Icon name='print' />
                                        Print
                                        </a>
                                    </div>
                                </Grid.Column>
                                <Grid.Column floated='left' width={5}>
                                    <div className="print-style">
                                        <a>
                                        <Icon name='arrow up' />
                                        Load cash
                                        </a>
                                    </div>
                                </Grid.Column>
                                <Grid.Column className="btn-operation" width={3}>
                                    <Form.Button onClick={this.show('mini')} primary><Icon name="plus"/>Operation</Form.Button>
                                </Grid.Column>
                                </Grid.Row>
                            </Grid>
            
                            <Table className="table-card">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Date of OPeration</Table.HeaderCell>
                                    <Table.HeaderCell>Description</Table.HeaderCell>
                                    <Table.HeaderCell>Reference</Table.HeaderCell>
                                    <Table.HeaderCell>Amount</Table.HeaderCell>
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
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jamie Harington</Table.Cell>
                                    <Table.Cell>January 11, 2014</Table.Cell>
                                    <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Jill Lewis</Table.Cell>
                                    <Table.Cell>May 11, 2014</Table.Cell>
                                    <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                    <Table.Cell>No</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                        {/*Modal Load petit cash */}
                        <Modal size={size} open={open} onClose={this.close}>
                        <Modal.Header>New Operation</Modal.Header>
                            <Modal.Content>
                                <Form>   
                                    <Form.Field>
                                    <label>INvoice No.</label>
                                    <input placeholder='Last Name' />
                                    </Form.Field>

                                    <Form.Field>
                                    <label>Product name</label>
                                    <input placeholder='Last Name' />
                                    </Form.Field>

                                    <Form.Field>
                                    <label>Amount In FRW</label>
                                    <input placeholder='Last Name' />
                                    </Form.Field>

                                    <label>Invoice Date</label>
                                    <Form.Group widths='equal'>
                                    <SemanticDatepicker
                                                className="full-width"
                                                placeholder="Invoice Date"
                                                name='birth'
                                            />
                                    </Form.Group>
                                </Form>
                            </Modal.Content>
                            <Modal.Actions>
                            <div className="center-btn-petit-cash">
                            <Button
                                positive
                                icon='checkmark'
                                content='Yes'
                                />
                            <Button negative icon="cancel" content="No" />
                            </div>
                            </Modal.Actions>
                        </Modal>
                        </Card.Content>
                    </Card>
                </Card.Group>
        )
    }
}

export default PetitCashTable