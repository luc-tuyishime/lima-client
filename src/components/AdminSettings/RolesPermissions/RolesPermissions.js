import React, { Component } from 'react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';
import MiniNavbar from '../../common/Navbar/MiniNavbar';
import RolePermissionTable from './RolesPermissionsTable';

import './RolesPermissions.scss';

class RolesPermissions extends Component {
    render() {
        return (
            <div className="bg-container">
                <Navbar />
                <MiniNavbar/>
                <RolePermissionTable/>
                <UserSidebar />
            </div>
        )
    }
}

export default RolesPermissions;