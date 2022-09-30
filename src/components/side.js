import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const Side_Styled = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--light-slate);
  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
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