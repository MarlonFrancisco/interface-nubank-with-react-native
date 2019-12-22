import React from 'react';
import {Container, TabsContainer} from './styled';
import TabItem from '~/components/TabItem';

export default () => {
  const items = [
    {icon: 'person-add', text: 'Indicar amigos'},
    {icon: 'chat-bubble-outline', text: 'Cobrar'},
    {icon: 'arrow-downward', text: 'Depositar'},
    {icon: 'arrow-upward', text: 'Transferir'},
    {icon: 'lock', text: 'Bloquear cartão'},
  ];
  return (
    <Container>
      <TabsContainer>
        {items.map((item, index) => (
          <TabItem text={item.text} icon={item.icon} key={index} />
        ))}
      </TabsContainer>
    </Container>
  );
};
