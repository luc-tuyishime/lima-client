import React, { Component } from 'react';
import { Form, Select, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { relationPO } from '../../../../../helpers/userRegistration/relationPO';
import { organizationType } from '../../../../../helpers/userRegistration/organizationType';
import Btn from '../../../../common/Button/Button';
import '../../../../Register/Register.scss';

class OrganizationThree extends Component {
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
      const { form, handleChange } = this.props;
      return (
         <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input
               label="Contact person first name"
               placeholder="first name...."
               name="contactPersonFirstName"
               type="text"
               onChange={handleChange('contactPersonFirstName')}
               defaultValue={form.contactPersonFirstName}
            />
             <Form.Input
               label="Contact person last name"
               placeholder="last name...."
               name="contactPersonLastName"
               type="text"
               onChange={handleChange('contactPersonLastName')}
               defaultValue={form.contactPersonLastName}
            />
             </Form.Group>
             <Form.Group widths={2}>
             <Form.Input
               label="Phone number"
               placeholder="Phone number...."
               name="contactPersonLastName"
               type="text"
               onChange={handleChange('phone')}
               defaultValue={form.phone}
            />
              <Form.Input
               label="Email"
               placeholder="email...."
               name="email"
               type="text"
               onChange={handleChange('email')}
               defaultValue={form.email}
            />
             </Form.Group>
             <Grid>
            <Grid.Column floated='left' width={5}>
                <Btn className="back-confirm" onClick={this.back}>
                  BACK
                </Btn>
                </Grid.Column>
                <Grid.Column floated='right' width={5}>
                <Btn className="btn-sign-in" onClick={this.saveAndContinue}>
                   SAVE AND CONTINUE
                 </Btn>
                </Grid.Column>
            </Grid>
         </Form>
      );
   }
}

OrganizationThree.propTypes = {
   nextStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

export default OrganizationThree;
