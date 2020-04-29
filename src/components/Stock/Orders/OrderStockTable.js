import React, { Component } from 'react';
import { Card, Table, Search, Grid, Button, Icon, Popup, Label, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../../../assets/css/table.scss';
import './orders.scss';

class OrderStockTable extends Component {

    state = {
        open: false
    }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state
        return (
            <>
                <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content className="header-bg-color">
                            Order list
                        </Card.Content>
                        <Card.Content>
                            <Grid>
                                <Grid.Column floated='left' width={7}>
                                    <Search
                                        className="search"
                                        fluid
                                        icon="search"
                                        placeholder="Search..."
                                    />
                                </Grid.Column>
                            </Grid>

                            <Table className="table-card" singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Status</Table.HeaderCell>
                                        <Table.HeaderCell>Date</Table.HeaderCell>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Phone number</Table.HeaderCell>
                                        <Table.HeaderCell>Number of items</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row className="table-row-style" onClick={this.show()}>
                                        <Table.Cell><Label color='red' horizontal>New</Label></Table.Cell>
                                        <Table.Cell>September 14, 2013</Table.Cell>
                                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>No</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell><Label color='red' horizontal>New</Label></Table.Cell>
                                        <Table.Cell>January 11, 2014</Table.Cell>
                                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                                        <Table.Cell>Yes</Table.Cell>
                                        <Table.Cell>No</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell><Label color='red' horizontal>New</Label></Table.Cell>
                                        <Table.Cell>May 11, 2014</Table.Cell>
                                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                        <Table.Cell>Yes</Table.Cell>
                                        <Table.Cell>No</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell><Label color='red' horizontal>New</Label></Table.Cell>
                                        <Table.Cell>May 11, 2014</Table.Cell>
                                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                        <Table.Cell>Yes</Table.Cell>
                                        <Table.Cell>No</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>May 11, 2014</Table.Cell>
                                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                        <Table.Cell>Yes</Table.Cell>
                                        <Table.Cell>No</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>May 11, 2014</Table.Cell>
                                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                        <Table.Cell>Yes</Table.Cell>
                                        <Table.Cell>No</Table.Cell>

                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Card.Content>
                    </Card>
                </Card.Group>

                {/* MODAL */}
                <Modal size={size} open={open} onClose={this.close}>
                  <Modal.Header>Order Number</Modal.Header>
                    <Modal.Content>
                    <Grid>
                        <Grid.Column floated='left' width={5}>
                        <p>Name: Lastname Firstname</p>
                        <p>Phone number: +250784421255</p>
                        <p>Date: dd-mm-yyyy</p>
                        </Grid.Column>
                    </Grid>
                    </Modal.Content>
                    <Table className="table-order" singleLine>
                    <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Category</Table.HeaderCell>
                                <Table.HeaderCell>Product name</Table.HeaderCell>
                                <Table.HeaderCell>Quantity</Table.HeaderCell>
                                <Table.HeaderCell>Stock available</Table.HeaderCell>
                                <Table.HeaderCell>Unit for measure</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Equipment</Table.Cell>
                                <Table.Cell>September 14, 2013</Table.Cell>
                                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Equipment</Table.Cell>
                                <Table.Cell>January 11, 2014</Table.Cell>
                                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Equipment</Table.Cell>
                                <Table.Cell>May 11, 2014</Table.Cell>
                                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                <Table.Cell>Yes</Table.Cell>
                                <Table.Cell>No</Table.Cell>
                                
                            </Table.Row>
                        </Table.Body>
                        </Table>
                        <Modal.Actions>
                            <Button negative>Reject</Button>
                            <Button
                                positive
                                icon='checkmark'
                                labelPosition='right'
                                content='Approve'
                            />
                    </Modal.Actions>
                    </Modal>
                <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
            </>
        );
    }
}

export default OrderStockTable;
