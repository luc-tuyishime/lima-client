import React, { Component } from "react";
import { Menu, Image, Icon, Dropdown, Button } from "semantic-ui-react";
import { connect } from 'react-redux';
import { logout } from '../../../actions/user';
import "./Navbar.scss";

const LimaLogo = require("../../../assets/images/Logo2.png");

const trigger = (
	<span>
		<Icon className='bell' size='big' name='user circle' />
	</span>
);

class Navbar extends Component {

	logout = (e) => {
		e.preventDefault();
		localStorage.clear();
		window.location.replace('/');
	};

	render() {
		const { authorities, name } = this.props;
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
										<Dropdown.Item>Name : <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>
											{name}</span></Dropdown.Item>
										<Dropdown.Item>Role : <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>
											{authorities[0].authority}</span></Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Item
											icon='wrench'
											text='Manage your account'
										/>
										<Dropdown.Divider />
										<Menu.Item
											name='logout'
											onClick={this.logout}
											to="/"
										>
											<Button className="btn-logout" primary>Logout</Button>
										</Menu.Item>
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

const mapStateToProps = ({
	user: {
		profile: { authorities, name }
	}
}) => ({
	authorities,
	name
});

export default connect(mapStateToProps, { logout })(Navbar);