import React, { Component } from 'react';
import { Grid, Image, Checkbox, Form } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Btn from '../common/Button/Button';
import { regularExpression } from '../../helpers/validation/ValidateEmail';
import { forgotPassword } from '../../actions/user';
import { validateLima } from '../../helpers/validation';
import RaindropImage from '../common/Raindrop/Raindrop';
import './resetPassword.scss';

const LimaLogo = require('../../assets/images/Logo2.png');

const customId = "custom-id-yes";

export class ForgotPassword extends Component {

   state = {
      email: '',
      loading: false
   };

   handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   handleSubmit = async (e) => {
      e.preventDefault();
      const { email } = this.state;

      if (regularExpression.test(email)) {
         const isEmailSent = await this.props.forgotPassword(email);
         this.setState({ email: '' });
         return isEmailSent;
      }

      return toast.error('Please enter your Email');
   };

   static getDerivedStateFromProps = (nextProps) => {
      const alertMessage = (nextProps.message && toast.success('Email sent please check your Email', {
         toastId: customId
      }))
         || (nextProps.errors && toast.error(nextProps.errors.message));

      return !nextProps.loading && alertMessage;
   };

   render() {
      const { loading } = this.props;
      const { email } = this.state;
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
                           <ToastContainer position={toast.POSITION.TOP_RIGHT} />
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
                                    <Form onSubmit={this.handleSubmit} className="form-digits">
                                       <Form.Input
                                          label="Enter Email"
                                          type="text"
                                          name="email"
                                          className="input-email"
                                          placeholder="enter email"
                                          onChange={this.handleChange}
                                          value={email || ''}
                                       />
                                       <Btn
                                          className="btn-sign-in"
                                          type="submit"
                                          loading={loading}
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

ForgotPassword.propTypes = {
   nextStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

const mapStateToProps = ({
   user: { forgotPassword: { loading, message, errors } } }) => ({
      loading,
      message,
      errors
   });


export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);

