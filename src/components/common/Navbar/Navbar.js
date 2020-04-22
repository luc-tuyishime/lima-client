import React, { Component } from "react";
import { Menu, Image, Icon, Dropdown, Button } from "semantic-ui-react";
import "./Navbar.scss";

const LimaLogo = require("../../../assets/images/Logo2.png");

const trigger = (
	<span>
		<Icon className='bell' size='big' name='user circle' />
	</span>
);

export default class Navbar extends Component {
	render() {
		return (
			<div className='Navbar'>
				<div className='navbar-menu'>
					<Menu className="border_bottom" secondary>
						<div className='div-left'>
							<Image
								className='logo-lima'
								src={LimaLogo}
								alt='logo'
							/>
							<div className="text-bottom">
								<p className="text-agriculture">Agriculture Digitized</p>
							</div>
						</div>

						<Menu.Menu position='right'>
							<Menu.Item>
								<Dropdown trigger={trigger}>
									<Dropdown.Menu>
										<Dropdown.Item text='First name' />
										<Dropdown.Item text='Lastname' />
										<Dropdown.Item text='Role' />
										<Dropdown.Item text='Cooperative name' />
										<Dropdown.Divider />
										<Dropdown.Item
											icon='wrench'
											text='Manage your account'
										/>
										<Dropdown.Divider />
										<Button primary className='btn-logout'>
											<Icon name='sign out' /> Log Out
										</Button>
									</Dropdown.Menu>
								</Dropdown>
							</Menu.Item>
							<Menu.Item>
								<Icon className='bell' name='mail' />
							</Menu.Item>
							<Menu.Item>
								<Icon className='bell' name='bell' />
							</Menu.Item>
						</Menu.Menu>
					</Menu>
				</div>
			</div>
		);
	}
}
