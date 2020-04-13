import _ from 'lodash';
import React, { Component } from 'react';
import { Card, Table, Search, Grid, Button, Icon, Popup, Divider, Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../../../../assets/css/table.scss';
import './ViewMembers.scss';

const colors = [
  'blue',
]

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
                        <Popup content='Edit' trigger={<Link to="/edit-farmer"><Icon color="yellow" name="edit" /></Link>} />
                        <Popup content='delete' trigger={<Icon color="red" name="trash" />} />
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
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
]

class ViewMembersTable extends Component {
     
    state = { color: colors[0] }

    handleColorChange = (e) => this.setState({ color: e.target.value })

    render() {
         const { color } = this.state
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
                <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
            </>
        );
    }
}

export default ViewMembersTable;
