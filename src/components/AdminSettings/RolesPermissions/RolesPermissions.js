import React, { Component } from 'react';
import UserSidebar from '../../common/Sidebar/Sidebar';
import Navbar from '../../common/Navbar/Navbar';

class RolesPermissions extends Component {
    render() {
        return (
            <>
                <Navbar />
                <UserSidebar />
            </>
        )
    }
}

export default RolesPermissions;