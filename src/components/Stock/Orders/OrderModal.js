import React,  { Component } from 'react';
import { Modal, Button, Table, Label, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './orders.scss';


const OrderModal = () => (
  <Modal trigger={<Button><Icon name='plus' />New</Button>}>
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
)

export default OrderModal;