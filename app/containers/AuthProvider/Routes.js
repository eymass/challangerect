import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from 'components/Common/PrivateRoute';
import PublicRoute from 'components/Common/PublicRoute';
import LoginPage from 'containers/LoginPage';
import PropTypes from 'prop-types';
import HomePage from 'containers/HomePage';

/**
 * Routing container
 * Private Route for authenticated
 * Public Route for public
 */

/* eslint-disable react/prefer-stateless-function */
class Routes extends React.Component {
  /**
   * render
   * @returns {*}
   */
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Switch>
        <PrivateRoute
          exact
          isAuthenticated={isAuthenticated}
          path="/"
          component={HomePage}
        />
        <PublicRoute
          exact
          isAuthenticated={isAuthenticated}
          path="/login"
          component={LoginPage}
        />
      </Switch>
    );
  }
}

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Routes;
