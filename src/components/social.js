import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '../config';
import Side from './side';
import Icon from './icons/icons';

const Social_Styled = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: '';
    display: block;
    width: 90px;
    height: 1px;
    margin: 0 auto;
    background-color: var(--violet);
  }
  li {
    &:last-of-type {
      margin: 0 0 0 20px;
    }
    a {
      padding: 10px;
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  @media (max-width: 1600px) {
    flex-direction: column;
    justify-content: center;
    &:after {
      width: 1px;
      height: 90px;
    }
    li {
      &:last-of-type {
        margin: 0 0 20px 0;
      }
    }
  }
`;

const Social = ({ isMainPage }) => (
  <Side isMainPage={isMainPage} orientation="top">
    <Social_Styled>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </Social_Styled>
  </Side>
);

export default Social;