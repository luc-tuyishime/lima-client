import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar, Accordion } from "semantic-ui-react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../../assets/images/money.svg';
import { ReactComponent as Logo2 } from '../../../assets/images/line.svg';
import { ReactComponent as Logo3 } from '../../../assets/images/message.svg';

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
      const { isAuth, authorities } = this.props;
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
                     {(isAuth && authorities[0].authority.includes('ROLE_ADMIN')) ? 
                     '' : 
                     <Menu.Item className="padding-side">
                        <Icon size="mini" className="icons-style" name="dashboard" />
                        <Link className="link-color" to="/dashboard">Dashboard</Link>
                      </Menu.Item>}
                     {(isAuth && authorities[0].authority.includes('ROLE_ADMIN')) ? 
                     '' : <Menu.Item>
                        <Icon name="user outline" />
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
                              <Link className="link-color" to="/create-farmer">
                                 <p className="text-side">New</p>
                              </Link>
                              <Link className="link-color" to="/view-farmers">
                                 <p className="text-side">All</p>
                              </Link>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item> }
                     {(isAuth && authorities[0].authority.includes('ROLE_ADMIN')) ?
                     '' : <Menu.Item>
                        <Icon name="group" />
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
                               <Link className="link-color" to="/view-members">
                                 <p className="text-side">All</p>
                              </Link>
                              <p>Lorem 2</p>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item> }
                     {(isAuth && authorities[0].authority.includes('ROLE_ADMIN')) ?
                     '' : <Menu.Item>
                        <Logo2 style={{ float: 'left' }} />
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
                           <Accordion.Content className="stock-side-padding" active={activeIndex === 3}>
                              <Link className="link-color" to="/available-stock"><p>All</p></Link> 
                              <Link className="link-color" to="/operation-stock"><p>Operations</p></Link>
                              <Link className="link-color" to="/order-stock"><p>Orders</p></Link>
                              <Link className="link-color" to="/requisition-stock"><p>Requisitions</p></Link>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item> }
                     {(isAuth && authorities[0].authority.includes('ROLE_ADMIN')) ?
                     '' : <Menu.Item>
                        <Logo style={{ float: 'left',  }}/>
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
                           <Accordion.Content className="stock-side-padding"  active={activeIndex === 4}>
                            <Link className="link-color" to="/finance/NewOperation"><p>New operation</p></Link>
                              <Link className="link-color" to="/finance/petitCash"><p>Petit Cash</p></Link>
                              <Link className="link-color" to="/finance/reports"><p>Reports</p></Link> 
                              <Link className="link-color" to="/finance/approvals"><p>Approvals</p></Link>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item> }
                     {(isAuth && authorities[0].authority.includes('ROLE_ADMIN')) ?
                     '' : <Menu.Item>
                        <Logo3 style={{ float: 'left' }} />
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
                     </Menu.Item> }
                     {(isAuth && authorities[0].authority.includes('ROLE_ADMIN')) ? 
                     <Menu.Item>
                        <Icon name="setting" />
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
                              <Link className="link-color" to="/organization">
                                 <p className="text-side">Create Organization</p>
                              </Link>
                           </Accordion.Content>
                        </Accordion>
                     </Menu.Item> : ''}
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

const mapStateToProps = ({
	user: {
      isAuth,
		profile: { authorities, name }
	}
}) => ({
   isAuth,
	authorities,
	name
});

export default connect(mapStateToProps)(UserSidebar);
