import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './Navbar.scss';

export const MiniNavbar = ({ home, settings, users }) => (
  <div className="Navbar">
    <Menu className="mini-navbar" size="mini">
      <Menu.Item className="mini-menu-margin-text">
        <Icon name="home" />
        {home}
      </Menu.Item>
      <Menu.Item className="mini-menu-margin-text">{settings}</Menu.Item>
      <Menu.Item className="mini-menu-margin-text">
        {users}
      </Menu.Item>
    </Menu>
  </div>
);

MiniNavbar.propTypes = {
  home: PropTypes.string,
  settings: PropTypes.object,
  users: PropTypes.object
};
