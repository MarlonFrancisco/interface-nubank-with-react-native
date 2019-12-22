import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  Title,
  Description,
  Annotation,
} from './styled';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

export default () => {
  let offset = 0;
  const translateY = new Animated.Value(0);
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = event.nativeEvent;

      offset += translationY;
      translateY.setOffset(offset);
      translateY.setValue(0);
    }
  }
  const animtedTranslated = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );
  return (
    <PanGestureHandler
      onGestureEvent={animtedTranslated}
      onHandlerStateChange={onHandlerStateChange}>
      <Container
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [-200, 0, 430],
                outputRange: [-50, 0, 430],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Header>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </Header>

        <Content>
          <Title>Saldo disponível</Title>
          <Description>R$ 190,500,00</Description>
        </Content>

        <Footer>
          <Annotation>
            Transferência de R$ 20,00 recebida de Marlon Francisco
          </Annotation>
        </Footer>
      </Container>
    </PanGestureHandler>
  );
};
