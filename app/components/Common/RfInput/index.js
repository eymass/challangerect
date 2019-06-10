/**
 *
 * RfInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import withStyles from '@material-ui/core/es/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const inputLeftRightMargin = '13px';

const styles = () => ({
  label: {
    fontSize: '16px',
    lineHeight: '1.33',
    letterSpacing: '0.4px',
    color: '#fff',
    marginLeft: inputLeftRightMargin,
    marginRight: inputLeftRightMargin,
  },
  input: {
    fontSize: '14px',
    lineHeight: '1.5',
    letterSpacing: '0.2px',
    color: '#fff',
    fontWeight: 400,
    paddingLeft: inputLeftRightMargin,
    paddingRight: inputLeftRightMargin,
    marginTop: '0',
  },
  formControl: {
    marginTop: '0',
  },
  error: {
    color: '#f34336',
  },
  underline: {
    '&:before': {
      borderBottom: '2px solid rgba(255,255,255,1)',
    },
  },
});

/* eslint-disable react/prefer-stateless-function */
class RfInput extends React.Component {
  state = { value: '' };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  onKeyPress = event => {
    if (event.which === 13 && this.props.withSubmit) {
      this.props.onChangeAndSubmit(this.state.value);
    }
  };

  onBlur = e => {
    this.props.onChange(e);
  };

  componentDidMount() {
    this.setState({
      value: this.props.value,
    });
  }

  render() {
    const {
      type,
      value,
      inputClass,
      disabled,
      labelText,
      id,
      formControlClass,
      classes,
      width,
      required,
      multiline,
      error,
      inputInputClass,
    } = this.props;
    return (
      <FormControl style={{ width: '100%' }}>
        <TextField
          inputlabelprops={{
            classes: { root: classes.label },
          }}
          margin="none"
          value={this.state.value}
          disabled={disabled}
          onBlur={this.onBlur}
          multiline={multiline}
          type={type}
          id={id}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          label={this.props.intl.formatMessage({ id: labelText })}
          className={formControlClass}
          InputProps={{
            classes: {
              root: inputClass || classes.input,
              input: inputInputClass,
              underline: classes.underline,
              formControl: classes.formControl,
            },
            inputRef: ref => {
              this.ref = ref;
            },
          }}
          style={{ width }}
        />
        <FormHelperText
          classes={{ root: classes.error }}
          required={required}
          htmlFor={id}
        >
          {!value && error && required ? `${labelText} is required` : ''}
        </FormHelperText>
      </FormControl>
    );
  }
}

RfInput.defaultProps = {
  width: '100%',
  withSubmit: false,
};

RfInput.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  withSubmit: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onChangeAndSubmit: PropTypes.func,
  labelText: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  inputClass: PropTypes.string,
  formControlClass: PropTypes.string,
  classes: PropTypes.object,
  intl: PropTypes.object,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  inputInputClass: PropTypes.string,
  error: PropTypes.bool,
};

export default compose(
  withStyles(styles),
  injectIntl,
)(RfInput);
