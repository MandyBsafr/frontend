import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

export const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: stretch;
  min-height: 100%;
  background-color: ${theme.colorDarkCharcoal};

  ${media.small`
    display: flex;
  `}
`;
