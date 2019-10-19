import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Intro = styled.section`
  width: 200px;
  height: 200px;
  background: ${theme.colorLightGrey};
  margin: 1em 0;
`;

export const Logo = styled.div`
  width: 200px;
  height: 50px;
  background: ${theme.colorLightGrey};
  margin: 1em 0;
`;
