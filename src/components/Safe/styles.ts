import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Copy = styled.div`
  max-width: ${theme.maxInputWidth};
`;

export const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1em 0;
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  background: url("assets/images/safe.png") center center no-repeat;
  background-size: contain;
  margin-bottom: 1em;
`;

export const Logo = styled.div`
  width: 145px;
  height: 50px;
  background: url("assets/images/bsafr_logo.png") center center no-repeat;
  background-size: contain;
  margin: 2em;
`;
