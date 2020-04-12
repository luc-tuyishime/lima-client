import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import UserSidebar from "../../common/Sidebar/Sidebar";
import Navbar from "../../common/Navbar/Navbar";
import { MiniNavbar } from "../../common/Navbar/MiniNavbar";
import CreateFarmerForm from "./CreateFarmerForm";

import "../../../assets/css/table.scss";

class CreateFarmer extends Component {
	render() {
		return (
			<div className='bg-container'>
				<Navbar />
				<MiniNavbar
					home='Home'
					settings={<>Farmers</>}
					users={
						<>
							<span className='blue-color'>New </span>
						</>
					}
				/>
				<Grid>
					<Grid.Column width={3}>
						<UserSidebar />
					</Grid.Column>
					<Grid.Column className='style-role' width={13}>
						<CreateFarmerForm />
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default CreateFarmer;
