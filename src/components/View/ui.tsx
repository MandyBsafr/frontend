import React, { memo } from 'react';
import Home from 'views/home';
import GlobalStyles from 'styles/global';
import * as styles from './styles';

const {
  Container,
} = styles;

export default memo(
  () => {
    return (
      <>
        <GlobalStyles />
        <Container>
          <Home />
        </Container>
      </>
    );
  },
);
