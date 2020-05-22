import _ from 'lodash';
import React, { Component } from 'react';
import { Card, Table, Search, Grid, Button, Icon, Popup, Message, Pagination } from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { getFarmers } from '../../../actions/farmer';

import '../../../assets/css/table.scss';

class ViewFarmersTable extends Component {
    
    state = {
        page: 1,
        itemsPerPage: 7,
        farmers: []
    }

    componentDidMount = () => {
        const { getFarmers } = this.props;
        getFarmers();
    };

    setPageNum = (event, { activePage }) => {
        this.setState({ page: activePage });
    };

     UNSAFE_componentWillReceiveProps = (nextProps) => {
         console.log('nextProps', nextProps);
        this.setState({
            farmers: nextProps.listOfFarmers
        });

        return this.setState;
    };

    render() {
        const { farmers } = this.state;
        const itemsPerPage = 7;
        const { page } = this.state;
        const totalPages = farmers.length / itemsPerPage;
        const items = farmers.slice(
            (page - 1) * itemsPerPage,
            (page - 1) * itemsPerPage + itemsPerPage
        );
        console.log('farmers', farmers);
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
                           { Object.keys(farmers).length ?
                           <>
                            <Table className="table-card" singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>First Name</Table.HeaderCell>
                                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                                        <Table.HeaderCell>ID Number</Table.HeaderCell>
                                        <Table.HeaderCell>Gender</Table.HeaderCell>
                                        <Table.HeaderCell>Land (size)</Table.HeaderCell>
                                        <Table.HeaderCell>DOB</Table.HeaderCell>
                                        <Table.HeaderCell>Season</Table.HeaderCell>
                                        <Table.HeaderCell>Phone number</Table.HeaderCell>
                                        <Table.HeaderCell>e-mail</Table.HeaderCell>
                                        <Table.HeaderCell>Actions</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                {_.map(items, ({ id, firstName, lastName, nationalId, gender, farm: { landSize, season }, dateOfBirth, phoneNumber, email  }) => (
                                    <Table.Row key={id}>
                                        <Table.Cell>{firstName}</Table.Cell>
                                        <Table.Cell>{lastName}</Table.Cell>
                                        <Table.Cell>{nationalId}</Table.Cell>
                                        <Table.Cell>{gender}</Table.Cell>
                                        <Table.Cell>{landSize}</Table.Cell>
                                        <Table.Cell>{moment(dateOfBirth).format("dddd, MMMM Do YYYY")}</Table.Cell>
                                        <Table.Cell>{season}</Table.Cell>
                                        <Table.Cell>{phoneNumber}</Table.Cell>
                                        <Table.Cell>{email}</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Link to="/edit-farmer"><Icon color="yellow" name="edit" /></Link>} />
                                        </Table.Cell>
                                    </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                            <div className="center-pagination">
                                <Pagination
                                    activePage={page}
                                    totalPages={totalPages}
                                    siblingRange={1}
                                    onPageChange={this.setPageNum}
                                />
                            </div>
                            </> : 
                            <Message info>
                            <p className="center-text">No Farmers available, Please create..</p>
                           </Message>
                           }
                        </Card.Content>
                    </Card>
                </Card.Group>
                <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
            </>
        );
    }
}


const mapStateToProps = ({
    farmer: { listOfFarmers, getFarmers: { loading, message, errors } } }) => ({
        listOfFarmers,
        loading,
        message,
        errors
 });


export default connect(mapStateToProps, { getFarmers })(ViewFarmersTable);

