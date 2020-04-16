import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { relationPO } from '../../../../../helpers/userRegistration/relationPO';
import { organizationType } from '../../../../../helpers/userRegistration/organizationType';
import Btn from '../../../../common/Button/Button';
import '../../../../Register/Register.scss';

class OrganizationOne extends Component {
   saveAndContinue = (e) => {
      e.preventDefault();
      const { nextStep } = this.props;
      nextStep();
   };

   render() {
      const { form, handleChange } = this.props;
      return (
         <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input
               label="Organization"
               placeholder="Organization...."
               name="Organization"
               type="text"
               onChange={handleChange('organization')}
               defaultValue={form.organization}
            />
            <Form.Field
               id="select"
               control={Select}
               label="Organization Type"
               onChange={handleChange('typeOfOrganization')}
               options={relationPO}
               placeholder="Organzation Type...."
               name="typeOfOrganization"
               search
               defaultValue={form.typeOfOrganization || ''}
            />
             </Form.Group>
             <Form.Group widths={2}>
            <Form.Field
               id="select"
               control={Select}
               label="Relation to PO"
               onChange={handleChange('relationToPO')}
               options={relationPO}
               placeholder="Relation to PO...."
               name="accountType"
               search
               defaultValue={form.relationToPO || ''}
            />
             <Form.Input
               label="Number of years in relation"
               placeholder="Number of years in relation...."
               name="NumberOfYearsInRelation"
               type="text"
               onChange={handleChange('NumberOfYearsInRelation')}
               defaultValue={form.NumberOfYearsInRelation}
            />
             </Form.Group>
            <Form.TextArea 
                width={8}
                label='Description of Relation.' 
                placeholder='Write...' 
                name="descriptionOfRelation"
                onChange={handleChange('descriptionOfRelation')}
                defaultValue={form.descriptionOfRelation}
            />
            <Btn className="btn-sign-in" onClick={this.saveAndContinue}>
               SAVE AND CONTINUE
            </Btn>
         </Form>
      );
   }
}

OrganizationOne.propTypes = {
   nextStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

export default OrganizationOne;
