import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../Register.scss';

class Confirmation extends Component {
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
      const {
         form: {
            accountType,
            firstName,
            lastName,
            personalID,
            email,
            phone,
            province,
            district,
            sector,
            village,
            birth,
            individualLandinAre,
            zone,
            site,
            membershipFees,
            profilePicture,
            password,
            confirmPassword,
         },
      } = this.props;
      return (
         <div>
            <h1 className="ui centered">Confirm your Details</h1>
            <p>
               Click Confirm if the following details have been correctly
               entered
            </p>
            <Grid divided="vertically">
               <Grid.Row columns={2}>
                  <Grid.Column>
                     <p>{accountType}</p>
                     <p>{firstName}</p>
                     <p>{lastName}</p>
                     <p>{personalID}</p>
                     <p>{email}</p>
                     <p>{phone}</p>
                     <p>{province}</p>
                     <p>{district}</p>
                     <p>{sector}</p>
                  </Grid.Column>
                  <Grid.Column>
                     <p>{village}</p>
                     <p>{moment(birth).format('dddd, MMMM Do YYYY')}</p>
                     <p>{individualLandinAre}</p>
                     <p>{zone}</p>
                     <p>{site}</p>
                     <p>{membershipFees}</p>
                     <p>{profilePicture}</p>
                     <p>{password}</p>
                     <p>{confirmPassword}</p>
                  </Grid.Column>
               </Grid.Row>
            </Grid>
            <Button className="back-confirm" onClick={this.back}>
               Back
            </Button>
            <Button
               className="confirm confirm-last"
               onClick={this.saveAndContinue}
            >
               Register
            </Button>
         </div>
      );
   }
}

Confirmation.propTypes = {
   nextStep: PropTypes.func,
   prevStep: PropTypes.func,
   form: PropTypes.object,
   accountType: PropTypes.string,
};

export default Confirmation;
