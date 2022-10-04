import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Layout } from '../components';

const Main_Styled = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;
const Title_Styled = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const Subtitle_Styled = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;
const Home_Styled = styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

const Error = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const content = (
    <Main_Styled className="fillHeight">
      <Title_Styled>404</Title_Styled>
      <Subtitle_Styled>Page Not Found</Subtitle_Styled>
      <Home_Styled href="/" target="_blank">Go Home</Home_Styled>
    </Main_Styled>
  );

  return (
    <Layout location={location}>
      <Helmet title="Page Not Found" />
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition timeout={500} classNames="fadeup">
              {content}
            </CSSTransition>
          )}
        </TransitionGroup>
    </Layout>
  );
};

export default Error;