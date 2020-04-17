import React, { Component } from 'react';
import { Grid, Button, Icon, Segment, Image, Form } from 'semantic-ui-react';

import '../../../../assets/css/table.scss';
import '../../../Farmers/EditFarmer/EditFarmer.scss';

const profile = require('../../../../assets/images/profile.png')

class EditMemberForms extends Component {

    state = {
        file: null
    };

    fileInputRef = React.createRef();

    fileChange = e => {
        this.setState({ file: e.target.files[0] }, () => {
            console.log("File chosen --->", this.state.file);
        });
    };

    render() {
        const imgSource = this.props.imgUri ? { uri: this.props.imgUri } : profile
        return (
            <div className="edit-farmer">
                <div>
                    <p className="text-farmer-edit">Individual Info</p>
                    <Grid columns={2} stretched>
                        <Grid.Row>
                            <Grid.Column id="edit-scroll">
                                <Segment>
                                    <Grid>
                                        <Grid.Column floated='left' width={5}>
                                            <p className="text-profile">Profile</p>
                                        </Grid.Column>
                                        <Grid.Column floated='right' width={3}>
                                            <Image src={imgSource} size='tiny' className="image-rounded" circular />
                                        </Grid.Column>
                                    </Grid>
                                    <Form>
                                        <Form.Field>
                                            <Grid>
                                                <Grid.Column floated='right' width={3}>
                                                    <Icon
                                                        size="large"
                                                        name="edit"
                                                        content="Choose File"
                                                        className="icon-upload"
                                                        icon="file"
                                                        onClick={() => this.fileInputRef.current.click()}
                                                    />
                                                    <input
                                                        ref={this.fileInputRef}
                                                        type="file"
                                                        hidden
                                                        onChange={this.fileChange}
                                                    />
                                                </Grid.Column>
                                            </Grid>
                                            <Form.Field>
                                                <input placeholder='First name' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Last Name' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='ID number' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Gender' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Birth Year' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Nationality' />
                                            </Form.Field>
                                            <Button className="btn-edit" primary type='submit'>Edit</Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column id="edit-scroll">
                                <Segment className="width-segment">
                                    <p className="text-profile">Contact</p>
                                    <Form>
                                        <Form.Field>
                                            <Form.Field>
                                                <input placeholder='Phone number' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Address' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Phone number' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Address' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Phone number' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Address' />
                                            </Form.Field>
                                            <Button className="btn-edit" primary type='submit'>Edit</Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                                <Segment className="width-segment">
                                    <p className="text-profile">Agriculture</p>
                                    <Form>
                                        <Form.Field>
                                            <Form.Field>
                                                <input placeholder='Zone' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Site' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Individual land in are' />
                                            </Form.Field>
                                            <Form.Field>
                                                <input placeholder='Paid membership fees' />
                                            </Form.Field>
                                            <Button className="btn-edit" primary type='submit'>Edit</Button>
                                        </Form.Field>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <p id="footer-content">Copyright &copy; MAHWI Tech Ltd</p>
                </div>
            </div>
        );
    }
}

export default EditMemberForms;
