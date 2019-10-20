import styled from 'styled-components';
import theme from 'styles/theme';

type ButtonProps = {
  type: string,
};

const buttonColors: {[index: string]: string} = {
  safe: 'green',
  message: theme.colorPurple,
  callContact: theme.colorOrange,
  call000: theme.colorRed,
};

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.div<ButtonProps>`
  background: ${props => buttonColors[props.type]};
  padding: 1em;
  width: 100%;
  color: ${theme.colorWhite};
  font-size: 1.25rem;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.div`
  font-size: 3rem;
  font-weight: 500;
  padding: 2em 0;
  color: ${theme.colorOrange};
`;

export const Text = styled.div`
  font-size: 1.5rem;
`;
