import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const Hero_Styled = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)), ${props => (props.location.pathname === '/' ? 'url(./hero.jpg)' : '')};
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0 0 100px 0;
  @media (max-width: 480px) {
    background-position: 30%;
    padding: 0 0 50px 0;
  }
  @media (max-height: 650px) {
    padding: 0 0 50px 0;
  }
  @media (max-height: 550px) {
    padding: 0;
  }
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  h1 {
    margin: 0 0 30px 4px;
    color: var(--violet);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h3 {
    margin-top: 10px;
    color: var(--browny);
    line-height: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 540px;
    @media (max-height: 550px) {
      font-size: var(--fz-md);
    }
  }
`;

const Hero = ({location}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hey visitor, I'm </h1>;
  const two = <h2 className="big-heading">Amedov Bekmuhamet.</h2>;
  const three = <h3 className="big-heading">I'm working in the web industry.</h3>;
  const four = (
    <>
      <p>
        I’m a web-developer specializing in building (and occasionally testing) exceptional
        digital solutions. Currently, I’m undergoing traineeship for QA engineer at{' '}
        <a href="https://www.a1qa.com/" target="_blank" rel="noreferrer">
          a1qa
        </a>
        .
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <Hero_Styled location={location}>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={2000}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
    </Hero_Styled>
  );
};

export default Hero;