import React, { memo } from 'react';
import Button from 'components/Button';
import CreateForm from 'components/CreateForm';
import * as styles from './styles';

const {
  Container,
  Intro,
  Logo,
} = styles;

export default memo(
  () => {
    return (
      <Container>
        <Logo>Logo</Logo>
        <Intro />
        <Button>Next</Button>
        <CreateForm />
      </Container>
    );
  },
);
