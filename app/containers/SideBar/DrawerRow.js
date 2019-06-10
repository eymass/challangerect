import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export class DrawerRow extends React.PureComponent {
  render() {
    const { row, classes } = this.props;
    return (
      <ListItem>
        <ListItemIcon />
        <ListItemText />
      </ListItem>
    );
  }
}

DrawerRow.propTypes = {
  row: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default DrawerRow;
