import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gender } from '../../../helpers//userRegistration/gender';
import { roleName } from '../../../helpers/userRegistration/roleName';

import { create } from '../../../actions/user';
import { validateLima } from '../../../helpers/validation';

import Btn from '../../common/Button/Button';
import '../Register.scss';

class UserFirstDetails extends Component {

   state = {
      form: {
         email: '',
         firstName: '',
         gender: '',
         lastName: '',
         // locationAddressId: '',
         mobile: '',
         // organizationId: '',
         password: '',
         roleName: '',
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

   componentWillMount() {
      const { listOfUsers } = this.props;
      this.setState({ listOfUsers });
   }

   handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.props);
      const { createUser } = this.props;
      const { errors, form } = this.state;
      const { confirmPassword, ...formData } = form;
      const formErrors = validateLima(form, 'newUser');

      this.setState({ errors: { ...errors, ...formErrors } });

      if (!Object.keys(formErrors).length) {
         createUser(formData);
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
      const { form, errors, message } = this.state;
      return (
         <div>
            <div className="scroll-sign-up" id="style-1">
               <ToastContainer position={toast.POSITION.TOP_RIGHT} />
               <Form onSubmit={this.handleSubmit}>
                  <Form.Group widths='equal'>
                     <Form.Input
                        label="email"
                        placeholder="Email...."
                        name="email"
                        type="text"
                        onChange={this.handleChange}
                        value={form.email || ""}
                        error={errors.email}
                     />
                     <Form.Input
                        label="firstName"
                        placeholder="firstName......"
                        name="firstName"
                        type="text"
                        onChange={this.handleChange}
                        value={form.firstName || ""}
                        error={errors.firstName}
                     />
                  </Form.Group>
                  <Form.Group widths='equal'>
                     <Form.Field
                        id="select"
                        control={Select}
                        label="Gender"
                        onChange={this.handleChange}
                        options={gender}
                        placeholder="Gender...."
                        name="gender"
                        search
                        value={form.gender || ""}
                        error={errors.gender}
                     />
                     <Form.Input
                        label="lastName"
                        placeholder="lastName...."
                        name="lastName"
                        type="text"
                        onChange={this.handleChange}
                        value={form.lastName || ""}
                        error={errors.lastName}
                     />
                  </Form.Group>
                  <Form.Group widths='equal'>
                     {/* <Form.Input
                        label="Localion Adress Id"
                        placeholder="Localion Adress Id...."
                        name="locationAddressId"
                        type="text"
                        onChange={this.handleChange}
                        value={form.locationAddressId || ""}
                     /> */}
                     <Form.Input
                        label="Phone"
                        placeholder="Phone...."
                        name="mobile"
                        type="text"
                        onChange={this.handleChange}
                        value={form.mobile || ""}
                        error={errors.mobile}
                     />
                  </Form.Group>

                  <Form.Group widths='equal'>
                     {/* <Form.Input
                        label="Organization Id"
                        placeholder="Organization Id...."
                        name="organizationId"
                        type="text"
                        onChange={this.handleChange}
                        value={form.organizationId || ""}
                     /> */}
                     <Form.Input
                        label="password"
                        placeholder="Password...."
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        value={form.password || ""}
                        error={errors.password}
                     />
                  </Form.Group>

                  <Form.Group widths='equal'>
                     <Form.Field
                        id="select"
                        control={Select}
                        label="Role Name"
                        onChange={this.handleChange}
                        options={roleName}
                        placeholder="roleName...."
                        name="roleName"
                        search
                        value={form.roleName || ""}
                        error={errors.roleName}
                     />
                  </Form.Group>
                  <Btn type="submit" className="btn-sign-in" primary loading={loading}>
                     SIGN UP
                  </Btn>
               </Form>
            </div>
         </div>
      );
   }
}

UserFirstDetails.propTypes = {
   nextStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

const mapStateToProps = ({
   user: { createUser: { loading, message, errors } } }) => ({
      loading,
      message,
      errors
   });

const mapDispatchToProps = dispatch => ({ createUser: payload => dispatch(create(payload)) });

export default connect(mapStateToProps, mapDispatchToProps)(UserFirstDetails);
