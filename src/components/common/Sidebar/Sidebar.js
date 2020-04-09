import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar, Accordion } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

class UserSidebar extends Component {
   state = { activeIndex: 1 };

   handleClick = (e, titleProps) => {
      const { index } = titleProps;
      const { activeIndex } = this.state;
      const newIndex = activeIndex === index ? -1 : index;

      this.setState({
         activeIndex: newIndex,
      });
   };

   render() {
      const { activeIndex } = this.state;
      return (
         <div className=" Sidebar-content">
            <div className="sidebar-height">
               <Sidebar.Pushable>
                  <Sidebar
                     className="sidebar-width"
                     as={Menu}
                     animation="overlay"
                     icon="labeled"
                     vertical
                     visible
                  >
                     <Menu.Item className="padding-side" as="a">
                        <Icon size="mini" className="icons-style" name="home" />
                        Dashboard
              </Menu.Item>
                     <Menu.Item>
                        <Icon name="gamepad" />
                        <Accordion>
                           <Accordion.Title
                              active={activeIndex === 0}
                              index={0}
                              onClick={this.handleClick}
                           >
                              <div>
                                 Farmers
                      <Icon className="icon-accordeon" name="dropdown" />
                              </div>
                           </Accordion.Title>
                           <Accordion.Content active={activeIndex === 0}>
                              <Link className="link-color" to="/view-farmers">
                                 <p className="text-side">All</p>
                              </Link>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item>
                     <Menu.Item as="a">
                        <Icon name="camera" />
                        <Accordion>
                           <Accordion.Title
                              active={activeIndex === 2}
                              index={2}
                              onClick={this.handleClick}
                           >
                              <div>
                                 Staff and enablers
                      <Icon className="icon-accordeon" name="dropdown" />
                              </div>
                           </Accordion.Title>
                           <Accordion.Content active={activeIndex === 2}>
                              <p>Lorem 1</p>
                              <p>Lorem 2</p>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item>
                     <Menu.Item as="a">
                        <Icon name="camera" />
                        <Accordion>
                           <Accordion.Title
                              active={activeIndex === 3}
                              index={3}
                              onClick={this.handleClick}
                           >
                              <div>
                                 Stock
                      <Icon className="icon-accordeon" name="dropdown" />
                              </div>
                           </Accordion.Title>
                           <Accordion.Content active={activeIndex === 3}>
                              <p>Lorem 1</p>
                              <p>Lorem 2</p>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item>
                     <Menu.Item>
                        <Icon name="camera" />
                        <Accordion>
                           <Accordion.Title
                              active={activeIndex === 4}
                              index={4}
                              onClick={this.handleClick}
                           >
                              <div>
                                 Finance
                      <Icon className="icon-accordeon" name="dropdown" />
                              </div>
                           </Accordion.Title>
                           <Accordion.Content active={activeIndex === 4}>
                              <p>Lorem 1</p>
                              <p>Lorem 2</p>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item>
                     <Menu.Item>
                        <Icon name="camera" />
                        <Accordion>
                           <Accordion.Title
                              active={activeIndex === 5}
                              index={5}
                              onClick={this.handleClick}
                           >
                              <div>
                                 Message Center
                      <Icon className="icon-accordeon" name="dropdown" />
                              </div>
                           </Accordion.Title>
                           <Accordion.Content active={activeIndex === 5}>
                              <p>Lorem 1</p>
                              <p>Lorem 2</p>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item>
                     <Menu.Item>
                        <Icon name="camera" />
                        <Accordion>
                           <Accordion.Title
                              active={activeIndex === 6}
                              index={6}
                              onClick={this.handleClick}
                           >
                              <div>
                                 Settings
                      <Icon className="icon-accordeon" name="dropdown" />
                              </div>
                           </Accordion.Title>
                           <Accordion.Content active={activeIndex === 6}>
                              <Link className="link-color" to="/role-permission">
                                 <p className="text-side">Roles & Permissions</p>
                              </Link>
                              <Link className="link-color" to="/manage-users">
                                 <p className="text-side">Manage Users</p>
                              </Link>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item>
                  </Sidebar>
                  <Sidebar.Pusher>
                     <Segment basic />
                  </Sidebar.Pusher>
               </Sidebar.Pushable>
            </div>
         </div>
      );
   }
}

export default UserSidebar;
