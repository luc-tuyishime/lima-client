import React, { Component } from "react";
import { Grid, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import UserSidebar from "../../../common/Sidebar/Sidebar";
import Navbar from "../../../common/Navbar/Navbar";
import { MiniNavbar } from "../../../common/Navbar/MiniNavbar";
import CreateMemberForm from "./CreateMemberForm";

import "../../../../assets/css/table.scss";

class CreateFarmer extends Component {
	render() {
		return (
			<div className='bg-container'>
				<Navbar />
				<MiniNavbar
					home='Home'
					settings={<>Staff & enablers</>}
					users={
						<>
							<span className='blue-color'>New </span>
						</>
					}
				><Link to='/view-members'> <Icon name='arrow left' />Back</Link></MiniNavbar>
				<Grid>
					<Grid.Column width={3}>
						<UserSidebar />
					</Grid.Column>
					<Grid.Column className='style-role' width={13}>
						<CreateMemberForm />
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default CreateFarmer;
