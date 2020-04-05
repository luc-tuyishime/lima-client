import React, { Component } from 'react'
import { Input, Menu, Image } from 'semantic-ui-react';

import './Navbar.scss';

const LimaLogo = require('../../../assets/images/Logo2.png')

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="Navbar">
        <div className="navbar-menu">
          <Menu secondary>
            <div className="div-left">
              <Image className="logo-lima" src={LimaLogo} alt="logo" />
            </div>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    )
  }
}