import React, { Component } from 'react'
import { Input, Menu, Image, Icon } from 'semantic-ui-react';
import './Navbar.scss';

const LimaLogo = require('../../../assets/images/Logo2.png')

export default class Navbar extends Component {
  render() {

    return (
      <div className="Navbar">
        <div className="navbar-menu">
          <Menu secondary>
            <div className="div-left">
              <Image className="logo-lima" src={LimaLogo} alt="logo" />
            </div>
            
            <Menu.Menu position='right'>
              <p className="text-bottom">System admin</p> 
              <Menu.Item>
              <Icon className="bell" size="big" name='user circle' />
            </Menu.Item>
              <Menu.Item>
                <Icon className="bell" name='mail' />
              </Menu.Item>
              <Menu.Item>
                <Icon className="bell" name='bell' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      </div>
    )
  }
}