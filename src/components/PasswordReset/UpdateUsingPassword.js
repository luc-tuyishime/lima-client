import React, { Component } from 'react';
import { Form, Grid, Image } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import { validateLima } from '../../helpers/validation';
import { resetPassword } from '../../actions/user';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Btn from '../common/Button/Button';
import '../Register/Register.scss';

import RaindropImage from '../common/Raindrop/Raindrop';

const LimaLogo = require('../../assets/images/Logo2.png');

class UpdatePassword extends Component {

   state = {
      form: {
         activationCode: '',
         email: '',
         password: '',
      },
      errors: {},
      loading: false,
      message: ''
   };

   handleChange = (_, data) => {
      const { form, errors } = this.state;
      this.setState({
         form: { ...form, [data.name]: data.value },
         errors: { ...errors, [data.name]: null },
         loading: false,
         message: ''
      });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.props);
      const { resetPassword } = this.props;
      const { errors, form } = this.state;
      const { confirmPassword, ...formData } = form;
      const formErrors = validateLima(form, 'updatePassword');

      this.setState({ errors: { ...errors, ...formErrors } });

      if (!Object.keys(formErrors).length) {
         resetPassword(formData);
      }
   };


   static getDerivedStateFromProps = (props) => {
      const alertMessage = (props.message && toast.success(props.message))
         || (props.errors && toast.error(props.errors));

      return (!props.loading && alertMessage) && {
         errors: props.errors,
         message: props.message
      }
   };

   render() {
      const { loading } = this.props;
      const { form, errors, message } = this.state;
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
                        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
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
                                    <Form onSubmit={this.handleSubmit}>
                                       <Form.Input
                                          label="Enter code"
                                          name="activationCode"
                                          type="text"
                                          placeholder="Enter code"
                                          onChange={this.handleChange}
                                          value={form.activationCode || ''}
                                          error={errors.activationCode}
                                       />
                                       <Form.Input
                                          label="Enter Email"
                                          name="email"
                                          type="text"
                                          placeholder="Enter email"
                                          onChange={this.handleChange}
                                          value={form.email || ''}
                                          error={errors.email}
                                       />
                                       <Form.Input
                                          label="New Password"
                                          placeholder="New Password...."
                                          name="password"
                                          type="password"
                                          onChange={this.handleChange}
                                          value={form.password || ''}
                                          error={errors.password}
                                       />
                                       <Btn type="submit" className="btn-sign-in" loading={loading}>
                                          UPDATE PASSWORD
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

const mapStateToProps = ({
   user: {
      resetPassword: { errors, message, loading }
   }
}) => ({
   errors,
   message,
   loading
});

export default connect(mapStateToProps, { resetPassword })(UpdatePassword);

