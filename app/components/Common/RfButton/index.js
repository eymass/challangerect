/**
 *
 * RfButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Button = styled.button`
  background-color: ${props => props.color};
  border: ${props => props.border};
  border-radius: 20px;
  font-size: ${props => props.fontSize};
  line-height: 14px;
  text-align: center;
  color: ${props => props.textColor};
  cursor: pointer;
  box-shadow: ${props => props.shadow};
  padding: ${props => props.padding};
`;

const Div = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: ${props => props.margin};
`;

const ChildrenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

/* eslint-disable react/prefer-stateless-function */
class RfButton extends React.PureComponent {
  render() {
    const {
      color,
      opacity,
      width,
      height,
      submit,
      titleId,
      margin,
      disableShadow,
      border,
      children,
      textColor,
      padding,
      fontSize,
      disabled,
      type,
    } = this.props;
    const shadow = disableShadow ? '' : '';
    return (
      <Div width={width} height={height} margin={margin}>
        <Button
          textColor={textColor}
          border={border}
          disabled={disabled}
          shadow={shadow}
          type={type || 'button'}
          color={color}
          style={{ width: '100%', height: '100%', opacity }}
          onClick={submit || (() => {})}
          padding={padding}
          fontSize={fontSize}
        >
          <ChildrenDiv>{children}</ChildrenDiv>

          {titleId ? <FormattedMessage id={titleId} /> : ''}
        </Button>
      </Div>
    );
  }
}

RfButton.defaultProps = {
  color: '#4081bb',
  border: '2px solid #fff',
  width: '100%',
  height: '38px',
  textColor: 'white',
  padding: '10px 20px',
  fontSize: '14px',
  disabled: false,
  opacity: 1,
};

RfButton.propTypes = {
  children: PropTypes.any,
  border: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  submit: PropTypes.func,
  titleId: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableShadow: PropTypes.bool,
  textColor: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
};

export default RfButton;
