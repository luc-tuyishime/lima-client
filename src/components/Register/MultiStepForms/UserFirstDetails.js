import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { accountTypes } from '../../../helpers/userRegistration/accountType';
import Btn from '../../common/Button/Button';
import '../Register.scss';

class UserFirstDetails extends Component {
   saveAndContinue = (e) => {
      e.preventDefault();
      const { nextStep } = this.props;
      nextStep();
   };

   render() {
      const { form, handleChange } = this.props;
      return (
         <Form>
            <Form.Field
               id="select"
               control={Select}
               label="Type"
               onChange={handleChange('accountType')}
               options={accountTypes}
               placeholder="Account Type...."
               name="accountType"
               search
               defaultValue={form.accountType || ''}
            />
            <Form.Input
               label="firstName"
               placeholder="firstName...."
               name="firstName"
               type="text"
               onChange={handleChange('firstName')}
               defaultValue={form.lastName}
            />
            <Form.Input
               label="lastName"
               placeholder="lastName...."
               name="lastName"
               type="text"
               onChange={handleChange('lastName')}
               defaultValue={form.lastName}
            />
            <Form.Input
               label="personal ID"
               placeholder="Personal ID...."
               name="personalID"
               type="text"
               onChange={handleChange('personalID')}
               defaultValue={form.personalID}
            />
            <Form.Input
               label="email"
               placeholder="Email...."
               name="email"
               type="text"
               onChange={handleChange('email')}
               defaultValue={form.email}
            />
            <Form.Input
               label="Phone"
               placeholder="Phone...."
               name="phone"
               type="text"
               onChange={handleChange('phone')}
               defaultValue={form.phone}
            />
            <Btn className="btn-sign-in" onClick={this.saveAndContinue}>
               SAVE AND CONTINUE
            </Btn>
         </Form>
      );
   }
}

UserFirstDetails.propTypes = {
   nextStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

export default UserFirstDetails;
