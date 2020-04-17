import React, { Component } from 'react';
import { Button, Grid, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Btn from '../../../../common/Button/Button';

import '../../../../Register/Register.scss';

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
      console.log(this.props);
      return (
         <Card.Group className='table-card scroll-style'>
            <Card fluid>
               <Card.Content className='header-bg-color'>
                  Organization Registration
               </Card.Content>
               <div className="enablers-form-padding">
                  <div>
                     <h1 className="ui centered">Confirm your Details</h1>
                     <p>
                        Click Confirm if the following details have been correctly
                        entered
                     </p>
                     <Grid divided="vertically">
                        <Grid.Row columns={2}>
                           <Grid.Column>
                              <p>One</p>
                           </Grid.Column>
                           <Grid.Column>
                              <p>two</p>
                           </Grid.Column>
                        </Grid.Row>
                     </Grid>
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
                  </div>
               </div>
            </Card>
         </Card.Group>
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
