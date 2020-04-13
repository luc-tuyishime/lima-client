import React, { Component } from "react";
import { Card, Grid, Button, Form, Select, Input } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";

import { zone } from "../../../../helpers/userRegistration/zone";
import { site } from "../../../../helpers/userRegistration/site";
import { provinces } from "../../../../helpers/userRegistration/provinces";
import { gender } from "../../../../helpers/userRegistration/gender.js";
import { districts } from "../../../../helpers/userRegistration/districts";
import { sectors } from "../../../../helpers/userRegistration/sectors";
import { village } from "../../../../helpers/userRegistration/villages";
import { cell } from "../../../../helpers/userRegistration/cell";

import "../../../../assets/css/scroll.scss";
import "../../../../assets/css/table.scss";
import "../../../../assets/css/scroll.scss";
import "./CreateMember.scss";

class CreateMemberForm extends Component {
	state = {
		file: null,
	};

	fileInputRef = React.createRef();

	fileChange = (e) => {
		this.setState({ file: e.target.files[0] }, () => {
			console.log("File chosen --->", this.state.file);
		});
	};

	render() {
		return (
			<>
				<Card.Group className='table-card scroll-style'>
					<Card fluid>
						<Card.Content className='header-bg-color'>
							Members registration form
						</Card.Content>
						<Form>
							<Grid>
								<Grid.Column floated='left' width={8}>
									<div
										id='edit-scroll'
										className='left-padding'
									>
										<Form.Field>
											<label>First Name</label>
											<input placeholder='First Name' />
										</Form.Field>
										<Form.Field>
											<label>Last Name</label>
											<input placeholder='Last Name' />
										</Form.Field>
										<Form.Field>
											<label>ID number</label>
											<input placeholder='ID number' />
										</Form.Field>
										<Form.Field>
											<Form.Select
												fluid
												label='Gender'
												options={gender}
												placeholder='Gender'
											/>
										</Form.Field>
										<Form.Group widths='equal'>
											<SemanticDatepicker
												label='Date of birth'
												name='birth'
											/>
										</Form.Group>
										<Form.Field>
											<label>Nationality</label>
											<input placeholder='nationality' />
										</Form.Field>
										<Form.Field
											id='select'
											control={Select}
											label='Zone'
											options={zone}
											placeholder='Zone....'
											name='zone'
											search
										/>
										<Form.Field
											id='select'
											control={Select}
											label='Site'
											options={site}
											placeholder='Site....'
											name='Site'
											search
										/>
									</div>
								</Grid.Column>
								<Grid.Column floated='right' width={8}>
									<div
										id='edit-scroll'
										className='left-padding'
									>
										<Form.Field>
											<label>Phone No</label>
											<input placeholder='Phone Number' />
										</Form.Field>
										<Form.Field
											id='select'
											control={Select}
											label='Province'
											options={provinces}
											placeholder='Province....'
											name='province'
											search
										/>
										<Form.Field
											id='select'
											control={Select}
											label='District'
											options={districts}
											placeholder='District....'
											name='district'
											search
										/>
										<Form.Field
											id='select'
											control={Select}
											label='Sector'
											options={sectors}
											placeholder='Sector....'
											name='sector'
											search
										/>
										<Form.Field
											id='select'
											control={Select}
											label='Cell'
											options={cell}
											placeholder='Cell....'
											name='cell'
											search
										/>
										<Form.Field
											id='select'
											control={Select}
											label='Village'
											options={village}
											placeholder='Village....'
											name='village'
											search
										/>
										<Form.Field
											id='select'
											control={Select}
											label='Zone'
											options={zone}
											placeholder='Zone....'
											name='zone'
											search
										/>
										<Form.Field>
											<label>Membership fees</label>
											<input placeholder='Membership fees' />
										</Form.Field>
										<Form.Field>
											<label>Profile Picture</label>
											<Input
												icon='upload'
												content='Choose File'
												className='icon-upload'
												onClick={() =>
													this.fileInputRef.current.click()
												}
												placeholder='Upload Image..'
											/>
											<input
												ref={this.fileInputRef}
												type='file'
												hidden
												onChange={this.fileChange}
											/>
										</Form.Field>
										<Button
											primary
											className='btn-create-farmer'
											type='submit'
										>
											Save
										</Button>
									</div>
								</Grid.Column>
							</Grid>
						</Form>
					</Card>
				</Card.Group>
				<p id='footer-content'>Copyright &copy; MAHWI Tech Ltd</p>
			</>
		);
	}
}

export default CreateMemberForm;
