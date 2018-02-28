import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 20px auto 0;
  font-weight: 700;
`;

const getClientsText = (number) => {
  const defaultText = 'No hay clientes conectados.';
  let text;

  if (number > 1) {
    text = `${number} clientes conectados!`;
  } else if (number === 1) {
    text = `${number} cliente conectado!`;
  }

  return text || defaultText;
};

const ClientsConnected = ({ number }) => (
  <StyledWrapper>
    {getClientsText(number)}
  </StyledWrapper>
);

ClientsConnected.propTypes = {
  number: PropTypes.number
};

ClientsConnected.defaultProps = {
  number: 0
};

export default ClientsConnected;