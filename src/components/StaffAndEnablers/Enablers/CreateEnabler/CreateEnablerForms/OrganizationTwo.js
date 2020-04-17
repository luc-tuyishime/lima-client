import React, { Component } from 'react';
import { Form, Select, Grid } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import PropTypes from 'prop-types';

import { contractInPlace } from '../../../../../helpers/userRegistration/contractInPlace';

import Btn from '../../../../common/Button/Button';
import '../../../../Register/Register.scss';

class OrganizationTwo extends Component {

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
            <Form.Field
               id="select"
               control={Select}
               label="Contract in place"
               onChange={handleChange('contractInPlace')}
               options={contractInPlace}
               placeholder="Contract in place...."
               name="contractInPlace"
               search
               defaultValue={form.contractInPlace || ''}
            />
              <Form.TextArea  
                label='Description agreement.' 
                placeholder='Write...' 
                name="descriptionOfRelation"
                onChange={handleChange('descriptionAgreement')}
                defaultValue={form.descriptionAgreement}
            />
             </Form.Group>
            <Form.Group widths="equal">
               <SemanticDatepicker
                  label="Contract Start Date"
                  name="contractStartDate"
                  onChange={handleChange('contractStartDate')}
                  value={form.contractStartDate || ''}
               />
            </Form.Group>
             <Form.Group widths="equal">
               <SemanticDatepicker
                  label="Contract End Date"
                  name="contractEndDate"
                  onChange={handleChange('contractEndDate')}
                  value={form.contractEndDate || ''}
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

OrganizationTwo.propTypes = {
   nextStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

export default OrganizationTwo;
