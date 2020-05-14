import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { activateAccount } from '../../actions/user';
import { validateLima } from '../../helpers/validation';
import Btn from '../common/Button/Button';
import '../Register/Register.scss';
import './Activate.scss';

class ActivateAccountForm extends Component {
   state = {
      form: {
         activationCode: '',
         email: '',
      },
      errors: '',
      loading: false,
      message: '',
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

   componentWillMount() {
      const { listOfUsers } = this.props;
      this.setState({ listOfUsers });
   }

   handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.props);
      const { activateUser } = this.props;
      const { errors, form } = this.state;
      const { confirmPassword, ...formData } = form;
      const formErrors = validateLima(form, 'activateAccount');

      this.setState({ errors: { ...errors, ...formErrors } });

      if (!Object.keys(formErrors).length) {
         activateUser(formData);
      }
   };


   componentWillReceiveProps = (nextProps) => {
      const alertMessage = (nextProps.message && toast.success(nextProps.message))
         || (nextProps.errors && toast.error(nextProps.errors));
      this.setState({
         errors: nextProps.errors,
         message: nextProps.message
      })
      return !nextProps.loading && alertMessage;
   };

   render() {
      const { loading } = this.props;
      const { form, errors } = this.state;
      return (
         <div className="select-part" id="element">
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            <div>
               <p className="text-digits">
                  Enter the six digits we have sent you
                  via Email
               </p>
               <Form onSubmit={this.handleSubmit} className="form-digits">
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
                     id=""
                     label="Enter Email"
                     name="email"
                     type="text"
                     placeholder="Enter email"
                     onChange={this.handleChange}
                     value={form.email || ''}
                     error={errors.email}
                  />
                  <div className="btn-activate">
                     <Btn type="submit" className="btn-sign-in-activate" loading={loading}>
                        Activate Account
                  </Btn>
                  </div>
               </Form>
            </div>
         </div>
      );
   }
}


ActivateAccountForm.propTypes = {
   nextStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

const mapStateToProps = ({
   user: { activateUser: { loading, message, errors } } }) => ({
      loading,
      message,
      errors
   });

const mapDispatchToProps = dispatch => ({ activateUser: payload => dispatch(activateAccount(payload)) });

export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccountForm);

