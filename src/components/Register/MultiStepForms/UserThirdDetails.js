import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { zone } from '../../../helpers/userRegistration/zone';
import { site } from '../../../helpers/userRegistration/site';
import Btn from '../../common/Button/Button';
import '../Register.scss';

class UserThirdDetails extends Component {
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
            <Form.Input
               label="Individual Land in Are"
               placeholder="Individual Land in Are"
               name="individualLandinAre"
               type="text"
               onChange={handleChange('individualLandinAre')}
               defaultValue={form.individualLandinAre}
            />
            <Form.Field
               id="select"
               control={Select}
               label="Zone"
               onChange={handleChange('zone')}
               options={zone}
               placeholder="Zone...."
               name="zone"
               search
               defaultValue={form.zone || ''}
            />
            <Form.Field
               id="select"
               control={Select}
               label="Site"
               onChange={handleChange('site')}
               options={site}
               placeholder="Size...."
               name="site"
               search
               defaultValue={form.site || ''}
            />
            <Form.Input
               label="Membership fees(Frw)"
               placeholder="Membership fees(Frw)..."
               name="membershipFees"
               type="text"
               onChange={handleChange('membershipFees')}
               defaultValue={form.membershipFees}
            />
            <Form.Input
               label="Profile Picture"
               placeholder="Profile Picture"
               name="profilePicture"
               type="text"
               onChange={handleChange('profilePicture')}
               defaultValue={form.profilePicture}
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

UserThirdDetails.propTypes = {
   nextStep: PropTypes.func,
   prevStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

export default UserThirdDetails;
