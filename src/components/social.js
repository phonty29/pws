import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '../config';
import Side from './side';
import Icon from './icons/icons';

const Social_Styled = styled.ul`
  display: flex;
  flex-direction: ${props => (props.isMainPage ?  'row-reverse' : 'column')};
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: '';
    display: block;
    width: ${props => (props.isMainPage ?  '90px' : '1px')};
    height: ${props => (props.isMainPage ?  '1px' : '90px')};
    margin: 0 auto;
    background-color: var(--violet);
  }
  li {
    &:last-of-type {
      margin: 0 0 ${props => (props.isMainPage ?  '0' : '20px')} ${props => (props.isMainPage ?  '20px' : '0')};
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
    <Social_Styled isMainPage={isMainPage}>
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