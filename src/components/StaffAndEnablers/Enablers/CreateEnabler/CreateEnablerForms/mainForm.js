import React, { Component } from 'react';

import OrganizationOne from './OrganizationOne';
import OrganizationTwo from './OrganizationTwo';
import OrganizationThree from './OrganizationThree';
import Confirmation from './confirmation';

export class MainForm extends Component {
   state = {
      step: 1,
      form: {
         organization: '',
         relationToPO: '',
         descriptionOfRelation: '',
         typeOfOrganization: '',
         NumberOfYearsInRelation: '',
         contractInPlace: '',
         contractStartDate: '',
         contractEndDate: '',
         descriptionAgreement: '',
         contactPersonFirstName: '',
         contactPersonLastName: '',
         phone: '',
         email: '',
      },
   };

   nextStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 1,
      });
   };

   prevStep = () => {
      const { step } = this.state;
      this.setState({
         step: step - 1,
      });
   };

   handleChange = (input) => (_, data) => {
      const { form } = this.state;
      this.setState({
         form: {
            ...form,
            [input]: data.value,
         },
      });

      console.log(form);
   };

   render() {
      const { form, step } = this.state;
      switch (step) {
         case 1:
            return (
               <OrganizationOne
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  form={form}
               />
            );
         case 2:
            return (
               <OrganizationTwo
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  form={form}
               />
            );
         case 3:
            return (
               <OrganizationThree
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  form={form}
               />
            );
         case 4:
            return (
               <Confirmation
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  form={form}
               />
            );
      }
   }
}

export default MainForm;
