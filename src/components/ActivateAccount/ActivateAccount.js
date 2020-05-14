import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Btn from '../common/Button/Button';
import RaindropImage from '../common/Raindrop/Raindrop';

import ActivateAccountForm from './ActivateAccountForm';
import '../Register/Register.scss';

const LimaLogo = require('../../assets/images/Logo2.png');

export class ActivateAccount extends Component {
   render() {
      return (
         <div className="select-part" id="element scroll">
            <Grid divided="vertically">
               <Grid.Row columns={2}>
                  <Grid.Column>
                     <RaindropImage>
                        <Link to="/">
                           <Btn id="btn-rain">Login</Btn>
                        </Link>
                     </RaindropImage>
                  </Grid.Column>
                  <Grid.Column>
                     <div className="scroll">
                        <Image
                           className="logo-lima"
                           src={LimaLogo}
                           alt="logo"
                        />
                        <p className="text-lima">Agriculture Digitized</p>
                        <p className="register-text">Activate Account</p>
                        <Grid>
                           <Grid.Column width={2} />
                           <Grid.Column width={12}>
                              <ActivateAccountForm />
                           </Grid.Column>
                           <Grid.Column width={2} />
                        </Grid>
                     </div>
                  </Grid.Column>
               </Grid.Row>
            </Grid>
         </div>
      );
   }
}

export default ActivateAccount;
