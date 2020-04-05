import React, { Component } from 'react'
import { Button, Dropdown, Menu, Icon } from 'semantic-ui-react';

import './Navbar.scss';

export default class MiniNavbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
     <div className="Navbar">
      <Menu className="mini-navbar" size='mini'>      
        <Menu.Item
         className="mini-menu-margin-text"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        >
        <Icon name='home' />
        Home
        </Menu.Item>
        <Menu.Item
        className="mini-menu-margin-text"
          name='Settings'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
      </Menu>
      </div>
    )
  }
}
