/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from './reset';
import { media } from 'styles/utils';

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: ${theme.fontBody};
    color: ${theme.colorCharcoal};
  }
  svg {
    width: 1em;
    height: 1em;
    margin: 0 3px;

    .u-fill {
      fill: ${theme.colorLightGrey};
      transition: 0.3s;
    }

    ${media.hover`
      &:hover {
        .u-fill {
          fill: ${theme.colorWhite};
        }
      }
    `}
  }
`;

export default GlobalStyles;
