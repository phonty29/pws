import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const Side_Styled = styled.div`
  height: 40px;
  position: fixed;
  left: ${props => (props.orientation === 'top' ? '0' : 'auto')};
  right: ${props => (props.orientation === 'top' ? 'auto' : '0')};
  top: ${props => (props.orientation === 'top' ? '100px' : 'auto')};
  bottom: ${props => (props.orientation === 'top' ? 'auto' : '50px')};
  z-index: 10;
  color: var(--violet);
  @media (max-width: 1080px) {
    top: ${props => (props.orientation === 'top' ? '100px' : 'auto')};
    bottom: ${props => (props.orientation === 'top' ? 'auto' : '25px')};
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
    <Side_Styled orientation={orientation}>
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