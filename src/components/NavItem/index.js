import React from 'react';
import {Container, NavText} from './styled';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({icon, text}) => {
  return (
    <Container>
      <Icon name={icon} color="#fff" size={26} />
      <NavText>{text}</NavText>
    </Container>
  );
};
