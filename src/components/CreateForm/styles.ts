import styled from 'styled-components';

interface SectionProps {
  isActive: boolean,
}

export const Contact = styled.div``;

export const Container = styled.div``;

export const Section = styled.div<SectionProps>`
  overflow: hidden;
  max-height: ${props => (props.isActive ? '1000px' : '0px')};
`;
