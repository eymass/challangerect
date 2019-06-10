/**
 *
 * Menu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import makeSelectMenu from './selectors';
import reducer from './reducer';
import saga from './saga';
import { logout } from '../AuthProvider/actions';
import { makeSelectUseData } from '../AuthProvider/selectors';

/* eslint-disable react/prefer-stateless-function */
export class Menu extends React.Component {
  handleLogout = () => {
    this.props.dispatch(logout());
  };

  render() {
    return (
      <AppBar position="relative" color="primary">
        <Toolbar variant="regular">
          <span />
        </Toolbar>
      </AppBar>
    );
  }
}

Menu.defaultProps = {
  userData: {
    username: undefined,
    email: undefined,
    image: undefined,
  },
};

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
  }),
};

const mapStateToProps = createStructuredSelector({
  menu: makeSelectMenu(),
  userData: makeSelectUseData(),
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

const withReducer = injectReducer({ key: 'menu', reducer });
const withSaga = injectSaga({ key: 'menu', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Menu);
