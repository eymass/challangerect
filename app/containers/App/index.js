/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from 'global-styles';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import AuthProvider from 'containers/AuthProvider';
import { withRouter } from 'react-router-dom';
import AuthSync from 'containers/AuthProvider/AuthSync';
import reducer from './reducer';
import { makeSelectLocation, makeSelectTheme } from './selectors';

class App extends React.PureComponent {
  render() {
    const { theme } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AuthProvider location={this.props.location} />
          <AuthSync />
          <GlobalStyle />
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  theme: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  theme: makeSelectTheme(),
  location: makeSelectLocation(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withReducer,
  withConnect,
  withRouter,
)(App);
