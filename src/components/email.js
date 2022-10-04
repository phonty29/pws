import React from 'react';
import styled from 'styled-components';
import { email } from '../config';
import Side from './side';

const Email_Styled = styled.div`
  display: flex;
  flex-direction: ${props => (props.isMainPage ?  'row' : 'column')};
  align-items: center;
  justify-content: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: ${props => (props.isMainPage ?  '90px' : '1px')};
    height: ${props => (props.isMainPage ?  '1px' : '90px')};
    margin: 0 auto;
    background-color: var(--violet);
  }
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: ${props => (props.isMainPage ?  'horizontal-tb' : 'vertical-rl')};
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
  @media (max-width: 1600px) {
      flex-direction: column;
      &:after {
        width: 1px;
        height: 90px;
      }
      a {
        writing-mode: vertical-rl;
      }
  }
`;

const Email = ({ isMainPage }) => (
  <Side isMainPage={isMainPage} orientation="bottom">
    <Email_Styled isMainPage={isMainPage}>
      <a href={`mailto:${email}`}>{email}</a>
    </Email_Styled>
  </Side>
);

export default Email;