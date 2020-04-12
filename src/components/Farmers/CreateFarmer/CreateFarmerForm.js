import React, { Component } from 'react';
import { Card, Grid, Button, Form, Select } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { Link } from 'react-router-dom';

import { zone } from '../../../helpers/userRegistration/zone';
import '../../../assets/css/table.scss';


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

class CreateFarmerForm extends Component {
    render() {
        return (
            <>
                <Card.Group className="table-card">
                    <Card fluid>
                        <Card.Content className="header-bg-color">
                            Farmer's registration form
                        </Card.Content>
                        <Grid>
                            <Grid.Column floated='left' width={8}>
                                <Form>
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
                                            options={options}
                                            placeholder='Gender'
                                        />
                                    </Form.Field>
                                    <Form.Group widths="equal">
                                        <SemanticDatepicker
                                            label="Date of birth"
                                            name="birth"
                                        />
                                    </Form.Group>
                                    <Form.Field>
                                        <label>Nationality</label>
                                        <input placeholder='nationality' />
                                    </Form.Field>
                                    <Form.Field
                                        id="select"
                                        control={Select}
                                        label="Zone"
                                        options={zone}
                                        placeholder="Zone...."
                                        name="zone"
                                        search
                                    />
                                    <Button type='submit'>Submit</Button>
                                </Form>
                            </Grid.Column>
                            <Grid.Column floated='right' width={8}>

                            </Grid.Column>
                        </Grid>
                    </Card>
                </Card.Group>
                <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
            </>
        );
    }
}

export default CreateFarmerForm;
