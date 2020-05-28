import _ from 'lodash';
import React, { Component } from 'react';
import { Card, Table, Search, Grid, Button, Icon, Popup, Message, Pagination, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { getCooperative, deleteCooperative } from '../../../actions/cooperative';

import '../../../assets/css/table.scss';

class DisplayCooperative extends Component {
    
    state = {
        page: 1,
        itemsPerPage: 7,
        cooperatives: [],
        open: false
    }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }

    close = () => this.setState({ open: false })

    componentDidMount = () => {
        const { getCooperative } = this.props;
        getCooperative();
    };

    setPageNum = (event, { activePage }) => {
        this.setState({ page: activePage });
    };

     UNSAFE_componentWillReceiveProps = (nextProps) => {
         console.log('nextProps', nextProps);
        this.setState({
             cooperatives: nextProps.listOfCooperative
        });

        return this.setState;
    };

     handleClick = (e, action, id, res) => {
        if (action === 'delete') {
        const { deleteCooperative } = this.props;
        deleteCooperative(id) && window.location.reload();
        }
    };

    render() {
        const { cooperatives, open, closeOnEscape, closeOnDimmerClick } = this.state;
        const itemsPerPage = 7;
        const { page } = this.state;
        const totalPages = cooperatives && cooperatives.length / itemsPerPage;
        const items = cooperatives && cooperatives.slice(
            (page - 1) * itemsPerPage,
            (page - 1) * itemsPerPage + itemsPerPage
        );
        return (
            <>
                <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content className="header-bg-color">
                            List of Cooperative
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
                           {Object.keys(cooperatives).length > 0 ?
                           <>
                            <Table className="table-card" singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Cooperative Name</Table.HeaderCell>
                                        <Table.HeaderCell>Person Name</Table.HeaderCell>
                                        <Table.HeaderCell>Phone</Table.HeaderCell>
                                        <Table.HeaderCell>Email</Table.HeaderCell>
                                        <Table.HeaderCell>National ID</Table.HeaderCell>
                                        <Table.HeaderCell>LIcense number</Table.HeaderCell>
                                        <Table.HeaderCell>Action</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                {_.map(items, ({ id, name, contactPersonName, contactPhone, contactEmail, nationalId, licenseNumber  }) => (
                                    <Table.Row key={id}>
                                        <Table.Cell>{name}</Table.Cell>
                                        <Table.Cell>{contactPersonName}</Table.Cell>
                                        <Table.Cell>{contactPhone}</Table.Cell>
                                        <Table.Cell>{contactEmail}</Table.Cell>
                                        <Table.Cell>{nationalId}</Table.Cell>
                                        <Table.Cell>{licenseNumber}</Table.Cell>
                                        <Table.Cell>
                                            <Popup content='Edit' trigger={<Link to={`/edit/cooperative/${id}`}><Icon color="yellow" name="edit" /></Link>} />
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
                            <p className="center-text">No cooperatives available, Please create..</p>
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
    cooperative: { listOfCooperative, listOneCooperative } }) => ({
        listOfCooperative,
        listOneCooperative
 });


export default connect(mapStateToProps, { getCooperative, deleteCooperative })(DisplayCooperative);

