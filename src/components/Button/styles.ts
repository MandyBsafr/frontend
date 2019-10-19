import styled from 'styled-components';
import {
  Button as AntdButton,
} from 'antd';
import theme from 'styles/theme';

export const Button = styled(AntdButton)`
  font-size: 1rem;
  border-radius: 2em;
  cursor: pointer;
  background: ${theme.colorOrange};
  color: ${theme.colorWhite};
  width: 100%;
  max-width: ${theme.maxInputWidth};
`;
