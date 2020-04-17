import React, { Component } from 'react';
import { Form, Select, Grid, Card } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import PropTypes from 'prop-types';

import { contractInPlace } from '../../../../../helpers/userRegistration/contractInPlace';

import Btn from '../../../../common/Button/Button';
import '../../../../Register/Register.scss';
import '../CreateEnabler.scss';

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
         <Card.Group className='table-card scroll-style'>
            <Card fluid>
               <Card.Content className='header-bg-color'>
                  Organization Registration
						</Card.Content>
               <div className="enablers-form-padding">
                  <Form>
                     <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                           <Grid.Column>
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
                           </Grid.Column>
                           <Grid.Column>
                              <Form.TextArea
                                 style={{ minHeight: 190 }}
                                 label='Description agreement.'
                                 placeholder='Write...'
                                 name="descriptionOfRelation"
                                 onChange={handleChange('descriptionAgreement')}
                                 defaultValue={form.descriptionAgreement}
                              />
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
                  </Form>
               </div>
            </Card>
         </Card.Group>
      );
   }
}

OrganizationTwo.propTypes = {
   nextStep: PropTypes.func,
   form: PropTypes.object,
   handleChange: PropTypes.func,
};

export default OrganizationTwo;
