/**
 *
 * LoginFooter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2%;
  text-align: center;
  width: 100%;
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.9px;
  text-align: center;
  color: #4a4a4a;
`;

const Version = styled.div`
  margin-top: 0.5%;
  margin-bottom: 2%;
`;

function CopyrightFooter({ text, version }) {
  return (
    <Container>
      &#169; <FormattedMessage id={text} />
      <br />
      <Version>
        <FormattedMessage id={version} />
      </Version>
    </Container>
  );
}

CopyrightFooter.propTypes = {
  text: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

export default CopyrightFooter;
