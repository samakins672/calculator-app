import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components/native';

const Card = ({ children, style }) => {
  const theme = useTheme();
  return (
    <CardContainer style={style} theme={theme}>
      {children}
    </CardContainer>
  );
};

const CardContainer = styled.View`
  background-color: ${props => props.theme.card};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  shadow-color: #000;
  shadow-offset: {
    width: 0,
    height: 2,
  };
  shadow-opacity: 0.23;
  shadow-radius: 2.62;
  elevation: 4;
`;

export default Card;