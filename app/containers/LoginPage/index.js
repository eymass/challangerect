/* eslint-disable global-require,jsx-a11y/alt-text */
/**
 *
 * LoginPage
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import PageWrapper from 'components/Common/PageWrapper';
import LoginLayout from 'components/Login/LoginLayout';
import { debounce } from 'utils/debounce';
import Card from '@material-ui/core/Card';
import LoginForm from 'components/Login/LoginForm';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/es/styles/withStyles';
import ErrorMessage from 'components/Common/ErrorMessage';
import { makeSelectError } from 'containers/AuthProvider/selectors';
import saga from './saga';
import reducer from './reducer';
import makeSelectLoginPage from './selectors';
import { loginFieldChange } from './actions';
import { authenticate } from '../AuthProvider/actions';
import styles from './styles';

/**
 * Login Page main Container.
 * onChange Field (debounce)
 * onSubmit Login (debounce)
 */
const debounceTimeout = 300;

export class LoginPage extends React.Component {
  /**
   * Username change
   * @param e
   */
  handleUsernameChange = e => {
    this.onUsernameChange(e.target.value);
  };

  dispatchUsernameChange = value => {
    this.props.dispatch(loginFieldChange('username', value));
  };

  onUsernameChange = debounce(this.dispatchUsernameChange, debounceTimeout);

  /**
   * Password change
   * @param e
   */
  handlePasswordChange = e => {
    this.onPasswordChange(e.target.value);
  };

  dispatchPasswordChange = value => {
    this.props.dispatch(loginFieldChange('password', value));
  };

  onPasswordChange = debounce(this.dispatchPasswordChange, debounceTimeout);

  /**
   * Submit Login
   */
  dispatchSubmit = () => {
    this.props.dispatch(authenticate());
  };

  submit = debounce(this.dispatchSubmit, debounceTimeout);

  /**
   * Render
   * @returns {*}
   */
  render() {
    const { classes, error } = this.props;
    return (
      <Fragment>
        <div className="loginRoot backgroundImage">
          <PageWrapper height="100vh" textAlign="center">
            <LoginLayout>
              <Card
                classes={{ root: classes.cardRoot }}
                className={classes.loginCard}
              >
                <CardContent classes={{ root: classes.cardContentRoot }}>
                  <div className={classes.logoLoginRoot}>
                    <img
                      className={classes.logoLogin}
                      src={require('images/nsure_logo.png')}
                    />
                  </div>
                  <LoginForm
                    forgotPasswordClass={classes.forgotPasswordClass}
                    handlePasswordChange={this.handlePasswordChange}
                    submit={this.submit}
                    handleUsernameChange={this.handleUsernameChange}
                    formControlClass={classes.formControl}
                    inputClass={classes.input}
                  />
                </CardContent>
              </Card>
              <ErrorMessage error={error} messageHeight="16px" marginTop="2%" />
            </LoginLayout>
          </PageWrapper>
        </div>
      </Fragment>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(LoginPage);
