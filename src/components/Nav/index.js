import React from 'react';
import NavItem from '../NavItem';
import {Container} from './styled';

export default () => {
  const items = [
    {icon: 'help-outline', text: 'Me ajuda'},
    {icon: 'person-outline', text: 'Perfil'},
    {icon: 'credit-card', text: 'Configurar cartão'},
    {icon: 'smartphone', text: 'Confirgurações do app'},
  ];
  return (
    <Container>
      {items.map(item => (
        <NavItem text={item.text} icon={item.icon} key={item.text} />
      ))}
    </Container>
  );
};
