import React, { Component } from 'react';
import {Card, Grid, Search, Button, Icon, Form, Radio, Table, Label, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import SemanticDatepicker from "react-semantic-ui-datepickers";

// import './operation.scss';

class ApprovalTable extends Component {
   
    state = {
        open: false
    }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open, size } = this.state
        return (
            <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content className="header-bg-color">
                            Incoming stock approval
                        </Card.Content>
                        <Card.Content>
                            <Grid>
                                <Grid.Column floated='right' width={5}>
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
                            </Grid>
                            {/* MODAL */}
                            <Modal size={size} open={open} onClose={this.close}>
                            <Modal.Header style={{ background: '#2980B9', color: '#fff' }}>Product Name</Modal.Header>
                                <Modal.Content>
                                <Grid>
                                    <Table celled>
                                    <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>Date</Table.Cell>
                                        <Table.Cell>dd-mm-yyyy</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Product name</Table.Cell>
                                        <Table.Cell>xxxxxxxx</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Category</Table.Cell>
                                        <Table.Cell>xxxxxxxxxx</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Incoming qantity</Table.Cell>
                                        <Table.Cell>xxxxxxxxx</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Unit price</Table.Cell>
                                        <Table.Cell>xxxxxxxxx</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Total Amount</Table.Cell>
                                        <Table.Cell>xxxxxxxxx</Table.Cell>
                                    </Table.Row>
                                    </Table.Body>
                                </Table>
                                </Grid>
                                </Modal.Content>
                                  <Modal.Actions>
                                  <Button
                                    positive
                                    icon='thumbs up'
                                    content='Approve'
                                    />
                                    <Button icon='cancel' content='Cancel' negative />
                                 </Modal.Actions>
                            </Modal>
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
        )
    }
}

export default ApprovalTable