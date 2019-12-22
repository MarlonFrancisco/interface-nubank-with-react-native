import React from 'react';
import {Container, Top, Logo, Title} from './styled';
import logo from '~/assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Marlon</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={26} color="#fff" />
    </Container>
  );
};
