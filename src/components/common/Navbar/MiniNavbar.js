import React from 'react';
import { Menu, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Navbar.scss';

export const MiniNavbar = ({ home, settings, users, children, other }) => (
  <Grid>
    <div className="Navbar">
      <Menu borderless className="mini-navbar" size="mini">
        <Menu.Item className="mini-menu-margin-text">
          <Icon name="home" />
          {home}
        </Menu.Item>
        <Menu.Item className="mini-menu-margin-text">{settings}</Menu.Item>
        <Menu.Item className="mini-menu-margin-text">
          {users}
        </Menu.Item>
        <Menu.Item className="mini-menu-margin-text">
          {other}
        </Menu.Item>
        <Grid.Column floated='right' width={5}>
          <Menu.Item className="left-back">
            {children}
          </Menu.Item>
        </Grid.Column>
      </Menu>
    </div>
  </Grid>
);

MiniNavbar.propTypes = {
  home: PropTypes.string,
  settings: PropTypes.object,
  users: PropTypes.object
};
