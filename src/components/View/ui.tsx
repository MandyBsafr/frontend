import React, { memo } from 'react';
import GlobalStyles from 'styles/global';
import * as styles from './styles';

interface Props {
  location: string,
}

const {
  Container,
} = styles;

export default memo(
  ({ location }: Props) => {
    console.log(location);
    return (
      <>
        <GlobalStyles />
        <Container>
          Bsafr!
        </Container>
      </>
    );
  },
);
