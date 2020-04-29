import React from 'react';
import { Card } from 'semantic-ui-react';

const CardDashboard = ({ children, ...otherProps }) => (
  <Card {...otherProps}>
   {children}
  </Card>
)

export default CardDashboard