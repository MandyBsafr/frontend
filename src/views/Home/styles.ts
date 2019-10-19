import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Intro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 1em 0;
`;

export const Heading = styled.h1`
  font-weight: 700;
`;

export const OrangeText = styled.span`
  color: ${theme.colorOrange};
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  background: url("assets/images/intro.png") center center no-repeat;
  background-size: contain;
  margin-bottom: 2em;
`;

export const Copy = styled.div``;
