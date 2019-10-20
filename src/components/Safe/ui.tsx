import React from 'react';
import * as styles from './styles';

const {
  Container,
  Copy,
  Heading,
  Image,
  Logo,
} = styles;

const Safe = () => {
  return (
    <Container>
      <Copy>
        <Heading>It's good to see you're safe now!</Heading>
      </Copy>
      <Image />
      <Copy>
        <Heading>Save your details for a safer future</Heading>
        <p>
          For next time, you’ll be able to prefill and directly skip to setting your alert time
        </p>
      </Copy>
      <Logo />
    </Container>
  );
};

export default Safe;
