import styled from 'styled-components';
import { Button as AntdButton } from 'antd';
import theme from 'styles/theme';

export const Button = styled(AntdButton)`
  padding: 0.5em 2em;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  background: ${theme.colorLightGrey};
`;
