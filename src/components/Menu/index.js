import React from 'react';
import {
  Container,
  Code,
  QRCode,
  SignOutButton,
  SignOutButtonText,
} from './styled';

import qcode from '~/assets/qrcode.png';
import Nav from '../Nav';

export default () => {
  return (
    <Container>
      <Code>
        <QRCode source={qcode} />
      </Code>

      <Nav />

      <SignOutButton>
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};
