import React, { Component } from 'react';
import { Table, Icon, Search } from 'semantic-ui-react';

import '../../../assets/css/table.scss';
import './ManageUsers.scss';

class ManageUsersTable extends Component {
  render() {
    return (
      <div className="manage-user-table">
        <Search
          className="search"
          fluid
          icon="search"
          placeholder="Search..."
        />
        <Table className="table-card" singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Phone number</Table.HeaderCell>
              <Table.HeaderCell>e-mail</Table.HeaderCell>
              <Table.HeaderCell>joined-on</Table.HeaderCell>
              <Table.HeaderCell>status</Table.HeaderCell>
              <Table.HeaderCell>action</Table.HeaderCell>
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
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>January 11, 2014</Table.Cell>
              <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
      </div>
    );
  }
}

export default ManageUsersTable;
