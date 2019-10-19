import React, { memo } from 'react';
import * as styles from './styles';

const { Container } = styles;

export default memo(
  () => {
    return (
      <Container>
        Home view
      </Container>
    );
  },
);
