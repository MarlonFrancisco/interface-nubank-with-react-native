import React, {useState} from 'react';
import {Container, Content} from './styled';
import {StatusBar} from 'react-native';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Card from '~/components/Card';
import Menu from '~/components/Menu';

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Container>
        <Header />

        <Content>
          <Menu />
          <Card />
        </Content>

        <Tabs />
      </Container>
    </>
  );
};
