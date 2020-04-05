import React, { Component } from 'react'
import { Card, Table, Icon } from 'semantic-ui-react'

import './RolesPermissions.scss';

class RolePermissionTable extends Component {
    render(){
        return(    
           <Card.Group className="table-card">
            <Card fluid>
            <Card.Content className="header-bg-color">
            Roles & Permissions
            </Card.Content>
            <Card.Content>
             <Table celled structured>
                <Table.Header className="table-header">
                <Table.Row active>
                    <Table.HeaderCell rowSpan='2'>Permissions</Table.HeaderCell>
                    <Table.HeaderCell className="role-text" colSpan='5'>Roles</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>MLima admin</Table.HeaderCell>
                    <Table.HeaderCell>Cooperative Admin</Table.HeaderCell>
                    <Table.HeaderCell>Farmer</Table.HeaderCell>
                    <Table.HeaderCell>Enablers</Table.HeaderCell>
                    <Table.HeaderCell>Buyer</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>View System Dashboard</Table.Cell>
                    <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='red' name='cancel' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='red' name='cancel' size='large' />
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Mange Users</Table.Cell>
                    <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='red' name='cancel' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='red' name='cancel' size='large' />
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Stock Management</Table.Cell>
                    <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='red' name='cancel' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='red' name='cancel' size='large' />
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Manage Farmers</Table.Cell>
                    <Table.Cell textAlign='center'>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='red' name='cancel' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='green' name='checkmark' size='large' />
                    </Table.Cell>
                    <Table.Cell>
                    <Icon color='red' name='cancel' size='large' />
                    </Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            </Card.Content>
            </Card>
          </Card.Group>
        )
    }
}

export default RolePermissionTable;
