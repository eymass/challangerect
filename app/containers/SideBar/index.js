/**
 *
 * SideBar
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Drawer from '@material-ui/core/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';
import ArrowBack from '@material-ui/icons/ArrowBack';
import List from '@material-ui/core/es/List/List';
import makeSelectSideBar from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles';
import DrawerRow from './DrawerRow';

/* eslint-disable react/prefer-stateless-function */
export class SideBar extends React.PureComponent {
  constructor(props) {
    super(props);
    //TODO
  }

  toggleDrawer = () => {
    //TODO
  };

  getMenuButtons = sideBarButtons => {
    const rows = [];
    if (sideBarButtons && sideBarButtons.map) {
      //TODO
      sideBarButtons.map(row => rows.push());
    }
    return rows;
  };

  render() {
    const { sideBarButtons } = this.props.sideBar;
    const menuButtons = this.getMenuButtons(sideBarButtons);
    return (
      <Fragment>
        <div className={this.props.classes.drawerRoot}>
        </div>
      </Fragment>
    );
  }
}

SideBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  sideBar: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sideBar: makeSelectSideBar(),
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

const withReducer = injectReducer({ key: 'sideBar', reducer });
const withSaga = injectSaga({ key: 'sideBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(SideBar);
