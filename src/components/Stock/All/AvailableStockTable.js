import React, { Component } from 'react';
import { Grid, Search, Table, Button, Icon, Popup, Modal, Size, Progress } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ReusableModal from '../../../components/common/Modal/Modal';

class AvailableStockTable extends Component{

     state = {
        open: false
    }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    render(){
        const { open, size } = this.state
        return(
            <div>
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
                            <Table.HeaderCell>Product code</Table.HeaderCell>
                            <Table.HeaderCell>Product name</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Qty in stock</Table.HeaderCell>
                            <Table.HeaderCell>Unit</Table.HeaderCell>
                            <Table.HeaderCell>Initial Stock</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>John Lilki</Table.Cell>
                            <Table.Cell>September 14, 2013</Table.Cell>
                            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                            <Table.Cell><Progress percent={47} progress indicating size='small' /></Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>
                                <Popup content='Edit' trigger={<Link to="/edit-member"><Icon color="yellow" name="edit" /></Link>} />
                                <Popup content='delete' trigger={<Icon onClick={this.show('mini')} color="red" name="trash" />} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie Harington</Table.Cell>
                            <Table.Cell>January 11, 2014</Table.Cell>
                            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>
                                <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
                                <Popup content='delete' trigger={<Icon color="red" name="trash" />} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>
                                <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
                                <Popup content='delete' trigger={<Icon color="red" name="trash" />} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>
                                <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
                                <Popup content='delete' trigger={<Icon color="red" name="trash" />} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>
                                <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
                                <Popup content='delete' trigger={<Icon color="red" name="trash" />} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>
                                <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
                                <Popup content='delete' trigger={<Icon color="red" name="trash" />} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>
                                <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
                                <Popup content='delete' trigger={<Icon color="red" name="trash" />} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jill Lewis</Table.Cell>
                            <Table.Cell>May 11, 2014</Table.Cell>
                            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                            <Table.Cell>Yes</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>No</Table.Cell>
                            <Table.Cell>
                                <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
                                <Popup content='delete' trigger={<Icon color="red" name="trash" />} />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Modal size={size} open={open} onClose={this.close} closeIcon>
                  <Modal.Header>Warning</Modal.Header>
                    <Modal.Content>
                        <p>You are about to delete this record permanently!</p>
                        <p>Are you sure you want to continue</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative>No</Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Yes'
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default AvailableStockTable;