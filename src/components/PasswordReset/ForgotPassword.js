import React, { Component } from 'react';
import { Grid, Image, Checkbox, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Btn from '../common/Button/Button';
import RaindropImage from '../common/Raindrop/Raindrop';
import './resetPassword.scss';

const LimaLogo = require('../../assets/images/Logo2.png');

export class ForgotPassword extends Component {
   render() {
      return (
         <div className="select-part" id="element">
            <Grid divided="vertically">
               <Grid.Row columns={2}>
                  <Grid.Column>
                     <RaindropImage>
                        <Link to="/">
                           <Btn id="btn-rain">Login</Btn>
                        </Link>
                     </RaindropImage>
                  </Grid.Column>
                  <Grid.Column>
                     <div>
                        <Grid.Column>
                           <div className="">
                              <Image
                                 className="logo-lima"
                                 src={LimaLogo}
                                 alt="logo"
                              />
                              <p className="text-lima">Agriculture Digitized</p>
                              <p className="register-text">Forgot Password</p>
                              <Grid>
                                 <Grid.Column width={4} />
                                 <Grid.Column width={8}>
                                    <Grid className="check-container">
                                       <Grid.Column floated="left" width={5}>
                                          <Checkbox
                                             className="email-checkbox"
                                             label={{
                                                children: 'Email',
                                             }}
                                          />
                                       </Grid.Column>
                                       <Grid.Column floated="right" width={5}>
                                          <Checkbox
                                             className="email-checkbox"
                                             label={{
                                                children: 'Phone',
                                             }}
                                          />
                                       </Grid.Column>
                                    </Grid>
                                    <Form>
                                       <Form.Field className="email-reset">
                                          <label>Enter Email</label>
                                          <input
                                             type="text"
                                             className="input-email"
                                             placeholder="enter email"
                                          />
                                       </Form.Field>
                                       <Btn
                                          className="btn-sign-in"
                                          type="submit"
                                       >
                                          SEND
                                       </Btn>
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
      );
   }
}

export default ForgotPassword;
