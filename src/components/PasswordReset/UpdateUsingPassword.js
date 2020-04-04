import React, { Component } from 'react';
import { Form, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Btn from '../common/Button/Button';
import '../Register/Register.scss';

import RaindropImage from '../common/Raindrop/Raindrop';

const LimaLogo = require('../../assets/images/Logo2.png')


class UpdatePassword extends Component {

    render() {
        return (
            <div id="element">
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <RaindropImage>
                                <Link to="/"><Btn id="btn-rain">Login</Btn></Link>
                            </RaindropImage>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                <Grid.Column>
                                    <div className="">
                                        <Image className="logo-lima" src={LimaLogo} alt="logo" />
                                        <p className="text-lima">Agriculture Digitized</p>
                                        <p className="register-text">Forgot Password</p>
                                        <Grid>
                                            <Grid.Column width={4} />
                                            <Grid.Column width={8}>
                                                <Form>
                                                    <Form.Input
                                                        label="New Password"
                                                        placeholder="New Password...."
                                                        name="newPassword"
                                                        type="password"
                                                    />
                                                    <Form.Input
                                                        label="Confirm password"
                                                        placeholder="Confirm Password...."
                                                        name="confirmPassword"
                                                        type="password"
                                                    />
                                                    <Btn className="btn-sign-in">UPDATE PASSWORD</Btn>
                                                </Form>
                                            </Grid.Column>
                                            <Grid.Column width={4} />
                                        </Grid>
                                    </div>
                                </Grid.Column>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default UpdatePassword;