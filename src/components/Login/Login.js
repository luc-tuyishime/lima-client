import React, { Component } from 'react';
import { Grid, Image, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Btn from '../common/Button/Button';
import '../common/Raindrop/Raindrop';

import RaindropImage from '../common/Raindrop/Raindrop';
import './Login.scss';

const LimaLogo = require('../../assets/images/Logo2.png')


export class Login extends Component {

    render() {

        return (
            <div id="element">
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <RaindropImage>
                                <Link to="/register"><Btn id="btn-rain">Register</Btn></Link>
                            </RaindropImage>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                <Image className="logo-lima" src={LimaLogo} alt="logo" />
                                <p className="text-lima">Agriculture Digitized</p>
                                <p className="login-text">LOGIN</p>
                                <Grid centered columns={2}>
                                    <Grid.Column>
                                        <Form>
                                            <Form.Field>
                                                <label>Enter your username</label>
                                                <input type="text" placeholder='username' />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Enter your password</label>
                                                <input type="password" placeholder='password' />
                                            </Form.Field>
                                            <Btn className="btn-sign-in" type='submit'>SIGN IN</Btn>
                                            <Link to="/forgot-password"><p className="forgot-password">Forgot Password ?</p></Link>
                                            <p className="language-text">EN | FR | KIN</p>
                                            <p className="copyright">MahwiTech. Ltd &copy 2020 | Terms and Conditiond</p>
                                        </Form>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Login;
