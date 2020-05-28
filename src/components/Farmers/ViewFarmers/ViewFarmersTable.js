import _ from 'lodash';
import React, { Component } from 'react';
import { Card, Table, Search, Grid, Button, Icon, Popup, 
Message, Pagination, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { getFarmers, deleteFarmer } from '../../../actions/farmer';

import '../../../assets/css/table.scss';

class ViewFarmersTable extends Component {

    state = {
        page: 1,
        itemsPerPage: 7,
        farmers: [],
        open: false
    }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }

    close = () => this.setState({ open: false })

    componentDidMount = () => {
        const { getFarmers } = this.props;
        getFarmers();
    };

    setPageNum = (event, { activePage }) => {
        this.setState({ page: activePage });
    };

    static getDerivedStateFromProps(props) {
        console.log('nextProps', props);
        return {
            farmers: props.listOfFarmers
        };
    };

     handleClick = (e, action, id) => {
        if (action === 'delete') {
        const { deleteFarmer } = this.props;
        deleteFarmer(id) && window.location.reload()
        }
    };

    render() {
        const { farmers, open, closeOnEscape, closeOnDimmerClick } = this.state;
        const itemsPerPage = 7;
        const { page } = this.state;
        const totalPages = farmers && farmers.length / itemsPerPage;
        const items = farmers && farmers.slice(
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
                            {Object.keys(farmers).length > 0 ?
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
                                            {_.map(items, ({ id, firstName, lastName, nationalId, gender, farm: { landSize, season }, dateOfBirth, phoneNumber, email }) => (
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
                                                        <Popup content='Edit' trigger={<Link to={`/edit-farmer/${id}`}><Icon color="yellow" name="edit" /></Link>} />
                                                        <Popup content='Delete' trigger={<Icon onClick={this.closeConfigShow(false, true)} color="red" name="trash" />} />
                                                    </Table.Cell>

                                                    {/* Confirm delete */}
                                                        <Modal
                                                        size="mini"
                                                        open={open}
                                                        closeOnEscape={closeOnEscape}
                                                        closeOnDimmerClick={closeOnDimmerClick}
                                                        onClose={this.close}
                                                        >
                                                        <Modal.Header>Delete Record</Modal.Header>
                                                        <Modal.Content>
                                                            <p>Are you sure you want to delete this record</p>
                                                        </Modal.Content>
                                                        <Modal.Actions>
                                                            <Button onClick={this.close} negative>
                                                            No
                                                            </Button>
                                                            <Button
                                                            onClick={(e) => 
                                                            this.handleClick(e, 'delete', id)}
                                                            positive
                                                            labelPosition='right'
                                                            icon='checkmark'
                                                            content='Yes'
                                                            />
                                                        </Modal.Actions>
                                                        </Modal>
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
                                    <p style={{ textAlign: 'center' }} className="center-text">No Farmers available, Please create..</p>
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


export default connect(mapStateToProps, { getFarmers, deleteFarmer })(ViewFarmersTable);

