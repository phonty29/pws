import React from 'react';
import styled from 'styled-components';
import { email } from '../config';
import Side from './side';

const Email_Styled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 90px;
    height: 1px;
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
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
  @media (max-width: 1600px) {
      flex-direction: column;
      justify-content: center;
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
    <Email_Styled>
      <a href={`mailto:${email}`}>{email}</a>
    </Email_Styled>
  </Side>
);

export default Email;