import React, { Component } from 'react';
import { Card, Table, Search, Grid, Button, Icon, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../../../assets/css/table.scss';

class ViewFarmersTable extends Component {
    render() {
        return (
            <>
                <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content className="header-bg-color">
                            List of farmers
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
                                <Grid.Column floated='right' width={2}>
                                    <Link to="create-farmer"><Button primary><Icon name='plus' />
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
                                        <Table.HeaderCell>Land (are)</Table.HeaderCell>
                                        <Table.HeaderCell>DOB</Table.HeaderCell>
                                        <Table.HeaderCell>Zone</Table.HeaderCell>
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
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Link to="/edit-farmer"><Icon color="yellow" name="edit" /></Link>} />
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
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
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
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
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
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
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
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
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
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
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
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
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
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Icon color="yellow" name="edit" />} />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Card.Content>
                    </Card>
                </Card.Group>
                <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
            </>
        );
    }
}

export default ViewFarmersTable;
