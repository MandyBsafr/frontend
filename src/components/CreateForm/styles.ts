import styled, { css } from 'styled-components';
import {
  Input as AntdInput,
  TimePicker as AntdTimePicker,
} from 'antd';
import theme from 'styles/theme';
import { fadeIn } from 'styles/animations';

interface SectionProps {
  isActive: boolean,
}

export const BackButton = styled.div`
  position: absolute;
  font-size: 2rem;
  top: 0px;
  left: 0px;
  padding: 1em;
  cursor: pointer;
  color: ${theme.colorDarkGrey};
`;

export const ConfirmValue = styled.div`
  font-size: 1.5rem;
`;

export const Contact = styled.div``;

export const Container = styled.div``;

export const Details = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding: 1em 0;
`;

export const Section = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  max-height: ${props => (props.isActive ? '1000px' : '0px')};
  animation: ${css`${fadeIn} 1s ease 1`};
`;

export const Input = styled(AntdInput)`
  border: none;
  padding: 1.5em 0;
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
  max-width: ${theme.maxInputWidth};
`;

export const Label = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  max-width: ${theme.maxInputWidth};
  text-align: left;

  ~ ${Input} {
    padding-top: 1em;
  }
`;

export const OrangeText = styled.span`
  color: ${theme.colorOrange};
`;

export const TimePicker = styled(AntdTimePicker)`
  transform: scale(1.25);
  width: 100%;
  max-width: 200px;
  margin: 1em 0 1.5em;

  input {
    text-align: center !important;
    border: 1px solid ${theme.colorOrange};
    color: ${theme.colorOrange};
    font-weight: 700;
  }
`;
