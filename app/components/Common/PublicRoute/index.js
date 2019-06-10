/**
 *
 * PublicRoute
 *
 */

import React from 'react';
import Route from 'react-router-dom/Route';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PublicRoute({ component: Component, isAuthenticated, ...children }) {
  return (
    <Route
      render={props =>
        isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} {...children} />
        )
      }
    />
  );
}

export default PublicRoute;
