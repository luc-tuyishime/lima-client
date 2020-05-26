import React, { Component } from 'react';
import { Grid, Image, Form, Message } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/user';
import { connect } from 'react-redux';
import { validateLima } from '../../helpers/validation';
import Btn from '../common/Button/Button';
import RaindropImage from '../common/Raindrop/Raindrop';

import './Login.scss';

const customId = "custom-id-yes";

const LimaLogo = require('../../assets/images/Logo2.png');

export class Login extends Component {

  state = {
    form: {
      login: '',
      password: '',
    },
    errors: {},
    loading: false,
    message: '',
    newRole: ''
  };

  static getDerivedStateFromProps(props) {
    let eeee = props.errors; 
    const { profile } = props;
    const { authorities } = profile;
    const result = authorities;
    const result2 = result && result.map(obj => {
      return obj.authority
    })

    const alertMessage =  eeee && toast.error(eeee, {
      toastId: customId
    });

    if(result2 && result2.includes('ROLE_ADMIN')){
      props.history.push('/organization')
    }

    if(result2 && result2.includes('ROLE_USER')){
      props.history.push('/dashboard')
    }

    return {
      newRole: result2
    }

    return !props.loading && alertMessage;
  }

  handleChange = (e) => {
    const { form, errors } = this.state;
    this.setState({
      form: { ...form, [e.target.name]: e.target.value },
      errors: { ...errors, [e.target.name]: null },
      loading: false,
      message: ''
    });
  };

  handeleSubmit = (e) => {
    e.preventDefault();
    const { form, errors } = this.state;
    const { login } = this.props;
    const { ...formData } = form;
    const formErrors = validateLima(form, 'loginUser');

    this.setState({ errors: { ...errors, ...formErrors } });

    if (!Object.keys(formErrors).length) {
      login(formData);
    }
  };

  render() {
    const { newRole } = this.state;
    const { loading, profile } = this.props;
    const { form, errors } = this.state;
    return (
      <div className="select-part" id="element">
      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        {/* {!loading && Object.keys(profile).length ? <Redirect to='/dashboard' /> : ''}   */}
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <RaindropImage>
                <Link to="/register">
                  <Btn id="btn-rain">Register</Btn>
                </Link>
              </RaindropImage>
            </Grid.Column>
            <Grid.Column>
              <div>
                <Image className="logo-lima" src={LimaLogo} alt="logo" />
                <p className="text-lima">Agriculture Digitized</p>
                <p className="login-text">LOGIN</p>
                <Grid centered columns={2}>
                  <Grid.Column>
                    <Form onSubmit={this.handeleSubmit}>
                      <Form.Group widths='equal'>
                        <Form.Input
                          type="text"
                          placeholder="Email"
                          name="login"
                          label="Enter your Email"
                          type="text"
                          onChange={this.handleChange}
                          value={form.login || ""}
                          error={errors.login}
                        />
                      </Form.Group>
                      <Form.Group widths='equal'>
                        <Form.Input
                          type="password"
                          placeholder="password"
                          name="password"
                          label="Password"
                          type="password"
                          onChange={this.handleChange}
                          value={form.password || ""}
                          error={errors.password}
                        />
                      </Form.Group>
                      <Btn className="btn-sign-in" type="submit" loading={loading}>
                        SIGN IN
                      </Btn>
                      <Link to="/forgot-password">
                        <p className="forgot-password">Forgot Password ?</p>
                      </Link>
                      <p className="language-text">EN | FR | KIN</p>
                      <p className="copyright">
                        MahwiTech. Ltd &copy 2020 | Terms and Conditiond
                      </p>
                    </Form>
                  </Grid.Column>
                </Grid>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({
  user: {
    loginUser: { errors, message, loading },
    profile
  }
}) => ({
  errors,
  message,
  loading,
  profile
});

export default connect(mapStateToProps, { login })(Login);
