import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const Side_Styled = styled.div`
  height: ${props => (props.isMainPage ? '40px' : 'auto')};
  width: ${props => (props.isMainPage ? 'auto' : '40px')};
  position: fixed;
  left: ${props => (props.isMainPage ? (props.orientation === 'top' ? '0' : 'auto') : (props.orientation === 'top' ? '20px' : 'auto'))};
  right: ${props => (props.isMainPage ? (props.orientation === 'top' ? 'auto' : '0') : (props.orientation === 'top' ? 'auto' : '10px'))};
  top: ${props => (props.isMainPage ? (props.orientation === 'top' ? '100px' : 'auto') : 'auto')};
  bottom: ${props => (props.isMainPage ? (props.orientation === 'top' ? 'auto' : '50px') : 0)};
  z-index: 10;
  color: var(--violet);
  @media (max-width: 1600px) {
    width: 40px;
    height: auto;
    top: auto;
    bottom: 0;
    left: ${props => (props.orientation === 'top' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'top' ? 'auto' : '0')};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = ({ children, isMainPage, orientation }) => {
  const [isMounted, setIsMounted] = useState(isMainPage === true ? false : true);
  useEffect(() => {
    if (!isMainPage) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Side_Styled isMainPage={isMainPage} orientation={orientation}>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={isMainPage ? 'fade' : ''} timeout={isMainPage ? 2000 : 0}>
              {children}
            </CSSTransition>
          )}
        </TransitionGroup>
    </Side_Styled>
  );
};

export default Side;