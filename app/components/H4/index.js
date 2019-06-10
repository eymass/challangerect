/**
 *
 * H4
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 30px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.3px;
  color: #fff;
`;

function H4({ text, color }) {
  return (
    <H2 style={{ color }}>
      {' '}
      <FormattedMessage id={text} />{' '}
    </H2>
  );
}

H4.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default H4;
