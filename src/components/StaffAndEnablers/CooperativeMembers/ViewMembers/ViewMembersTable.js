import _ from 'lodash';
import React, { Component } from 'react';
import { Card, Table, Modal, Search, Grid, Button, Icon, Popup, Divider, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ReusableModal from '../../../../components/common/Modal/Modal';

import '../../../../assets/css/table.scss';
import './ViewMembers.scss';

const colors = [
    'blue',
]

class ViewMembersTable extends Component {

    state = {
        color: colors[0],
        open: false
    }

    show = (size) => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    handleColorChange = (e) => this.setState({ color: e.target.value })

    render() {
        const { color, open, size } = this.state

        const panes = [
            {
                menuItem: 'Cooperative Members',
                render: () =>
                    <Tab.Pane className="tab-members" attached={false}>
                        <Grid>
                            <Grid.Column floated='left' width={7}>
                                <Search
                                    className="search"
                                    fluid
                                    icon="search"
                                    placeholder="Search..."
                                />
                            </Grid.Column>
                            <Grid.Column floated='right' width={2}>
                                <Link to="/create-member"><Button primary><Icon name='plus' />
                                New</Button></Link>
                            </Grid.Column>
                        </Grid>
                        <Table className="table-card" singleLine>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>First Name</Table.HeaderCell>
                                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                                    <Table.HeaderCell>ID Number</Table.HeaderCell>
                                    <Table.HeaderCell>Gender</Table.HeaderCell>
                                    <Table.HeaderCell>Nationality</Table.HeaderCell>
                                    <Table.HeaderCell>Phone number</Table.HeaderCell>
                                    <Table.HeaderCell>e-mail</Table.HeaderCell>
                                    <Table.HeaderCell>Actions</Table.HeaderCell>
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
                    </Tab.Pane>,
            },
            {
                menuItem: 'Enablers',
                render: () => <Tab.Pane className="tab-members" attached={false}>
                    <Grid>
                        <Grid.Column floated='left' width={7}>
                            <Search
                                className="search"
                                fluid
                                icon="search"
                                placeholder="Search..."
                            />
                        </Grid.Column>
                        <Grid.Column floated='right' width={2}>
                            <Link to="/create-enabler"><Button primary><Icon name='plus' />
                                New</Button></Link>
                        </Grid.Column>
                    </Grid>
                    <Table className="table-card" singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Organization</Table.HeaderCell>
                                <Table.HeaderCell>Organisation type</Table.HeaderCell>
                                <Table.HeaderCell>Relation to PO</Table.HeaderCell>
                                <Table.HeaderCell>Years in Relation</Table.HeaderCell>
                                <Table.HeaderCell>Contract in place</Table.HeaderCell>
                                <Table.HeaderCell>Contract person</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
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
                                <Table.Cell>
                                    <Popup content='Edit' trigger={<Link to="/edit-enabler"><Icon color="yellow" name="edit" /></Link>} />
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
                                <Table.Cell>
                                    <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
                                    <Popup content='delete' trigger={<Icon color="red" name="trash" />} />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Tab.Pane>,
            },
        ]

        return (
            <>
                <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content>
                            <Divider hidden />
                            <Tab
                                menu={{ color, inverted: true, attached: false, tabular: false }}
                                panes={panes}
                            />
                        </Card.Content>
                    </Card>
                </Card.Group>
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
                <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
            </>
        );
    }
}

export default ViewMembersTable;
