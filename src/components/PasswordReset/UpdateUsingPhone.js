import React, { Component } from 'react';
import { Form, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Btn from '../common/Button/Button';
import '../Register/Register.scss';

import RaindropImage from '../common/Raindrop/Raindrop';

const LimaLogo = require('../../assets/images/Logo2.png');

class UpdatePassword extends Component {
   state = {
      form: {
         one: '',
         two: '',
         three: '',
         four: '',
         five: '',
         six: '',
      },
      errors: '',
      loading: false,
      message: '',
   };

   handleChange = (_, data) => {
      const { form } = this.state;
      return data.value === '' ||
         (/^\d+$/.test(data.value) && data.value.length === 1)
         ? this.setState({
              form: {
                 ...form,
                 [data.name]: data.value,
              },
           })
         : '';
   };

   render() {
      const { form } = this.state;
      return (
         <div id="element">
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
                                 <Grid.Column width={3} />
                                 <Grid.Column width={10}>
                                    <div>
                                       <p className="text-digits">
                                          Enter the six digits we have sent you
                                          via SMS
                                       </p>
                                       <Form className="form-digits">
                                          <Form.Input
                                             id="form-code"
                                             className="block"
                                             name="one"
                                             type="text"
                                             onChange={this.handleChange}
                                             value={form.one || ''}
                                          />
                                          <Form.Input
                                             id="form-code"
                                             className="block"
                                             name="two"
                                             type="text"
                                             onChange={this.handleChange}
                                             value={form.two || ''}
                                          />

                                          <Form.Input
                                             id="form-code"
                                             className="block"
                                             name="three"
                                             type="text"
                                             onChange={this.handleChange}
                                             value={form.three || ''}
                                          />
                                          <Form.Input
                                             id="form-code"
                                             className="block"
                                             name="four"
                                             type="text"
                                             onChange={this.handleChange}
                                             value={form.four || ''}
                                          />

                                          <Form.Input
                                             id="form-code"
                                             className="block"
                                             name="five"
                                             type="text"
                                             onChange={this.handleChange}
                                             value={form.five || ''}
                                          />

                                          <Form.Input
                                             id="form-code"
                                             className="block"
                                             name="six"
                                             type="text"
                                             onChange={this.handleChange}
                                             value={form.six || ''}
                                          />
                                          <Btn className="btn-sign-in">
                                             UPDATE
                                          </Btn>
                                       </Form>
                                    </div>
                                 </Grid.Column>
                                 <Grid.Column width={3} />
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

export default UpdatePassword;
