import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Btn from '../../common/Button/Button';
import '../Register.scss';

class UserFourthDetails extends Component {
   saveAndContinue = (e) => {
      e.preventDefault();
      const { nextStep } = this.props;
      nextStep();
   };

   back = (e) => {
      e.preventDefault();
      const { prevStep } = this.props;
      prevStep();
   };

   render() {
      const { form } = this.props;
      return (
         <Form>
            <Form.Input
               label="password"
               placeholder="Password...."
               name="password"
               type="password"
               onChange={this.props.handleChange('password')}
               defaultValue={form.password}
            />
            <Form.Input
               label="Confirm password"
               placeholder="Confirm Password...."
               name="confirmPassword"
               type="password"
               onChange={this.props.handleChange('confirmPassword')}
               defaultValue={form.confirmPassword}
            />

            <Btn className="back-confirm" onClick={this.back}>
               BACK
            </Btn>
            <Btn className="confirm" onClick={this.saveAndContinue}>
               SAVE AND CONTINUE
            </Btn>
         </Form>
      );
   }
}

UserFourthDetails.propTypes = {
   nextStep: PropTypes.func,
   prevStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

export default UserFourthDetails;
