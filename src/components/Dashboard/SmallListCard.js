import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import CardDashboard from '../common/Card/Card';

import './Dashboard.scss';

class SmallListCard extends Component  {
    render(){
        return(
            <div>
            <Card.Group itemsPerRow={6}>
            <CardDashboard className="Card-violet">
                <Card.Content>
                    <span className="card-number">78</span>
                    <p>Farmers</p>
                </Card.Content>
                <Card.Content extra>
                   <p className="card-footer-text">View list. <Icon name='angle right' /></p>
                </Card.Content>
            </CardDashboard>

            <CardDashboard className="Card-ember">
               <Card.Content>
                    <span className="card-number">11</span>
                    <p>Staff</p>
                </Card.Content>
                <Card.Content extra>
                   <p className="card-footer-text">View list. <Icon name='angle right' /></p>
                </Card.Content>
            </CardDashboard>

            <CardDashboard className="Card-gray">
                <Card.Content>
                    <span className="card-number">208</span>
                    <p>Staff and enablers</p>
                </Card.Content>
                <Card.Content extra>
                   <p className="card-footer-text">View list. <Icon name='angle right' /></p>
                </Card.Content>
            </CardDashboard>

            <CardDashboard className="Card-green">
                <Card.Content>
                    <span className="card-number">88</span>
                    <p>Pending request</p>
                </Card.Content>
                <Card.Content extra>
                   <p className="card-footer-text">View list. <Icon name='angle right' /></p>
                </Card.Content>
            </CardDashboard>

            <CardDashboard className="Card-violet">
               <Card.Content>
                    <span className="card-number">48</span>
                    <p>Farmers</p>
                </Card.Content>
                <Card.Content extra>
                   <p className="card-footer-text">View list. <Icon name='angle right' /></p>
                </Card.Content>
            </CardDashboard>

            <CardDashboard className="Card-ember">
                <Card.Content>
                    <span className="card-number">18</span>
                    <p>Finance</p>
                </Card.Content>
                <Card.Content extra>
                   <p className="card-footer-text">View list. <Icon name='angle right' /></p>
                </Card.Content>
            </CardDashboard>
             </Card.Group>
            </div>
        )
    }
}

export default SmallListCard;