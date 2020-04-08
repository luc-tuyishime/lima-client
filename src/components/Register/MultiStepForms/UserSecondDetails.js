import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

import { provinces } from '../../../helpers/userRegistration/provinces';
import { districts } from '../../../helpers/userRegistration/districts';
import { sectors } from '../../../helpers/userRegistration/sectors';
import { village } from '../../../helpers/userRegistration/villages';
import Btn from '../../common/Button/Button';
import '../Register.scss';

class UserSecondDetails extends Component {
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
            <Form.Field
               id="select"
               control={Select}
               label="Province"
               onChange={handleChange('province')}
               options={provinces}
               placeholder="Province...."
               name="province"
               search
               defaultValue={form.province || ''}
            />
            <Form.Field
               id="select"
               control={Select}
               label="District"
               onChange={handleChange('district')}
               options={districts}
               placeholder="District...."
               name="District"
               search
               defaultValue={form.district || ''}
            />
            <Form.Field
               id="select"
               control={Select}
               label="Sector"
               onChange={handleChange('sector')}
               options={sectors}
               placeholder="Sector...."
               name="sector"
               search
               defaultValue={form.sector || ''}
            />
            <Form.Field
               id="select"
               control={Select}
               label="Village"
               onChange={handleChange('village')}
               options={village}
               placeholder="Village...."
               name="village"
               search
               defaultValue={form.village || ''}
            />
            <Form.Group widths="equal">
               <SemanticDatepicker
                  label="Date of birth"
                  name="birth"
                  onChange={handleChange('birth')}
                  value={form.birth || ''}
               />
            </Form.Group>
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

UserSecondDetails.propTypes = {
   nextStep: PropTypes.func,
   prevStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

export default UserSecondDetails;
