import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import {navbarLinks} from '../config';
import { useScrollDirection} from '../hooks';
import { Menu } from './index';

const Header_Styled = styled.header`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(255, 255, 255, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  @media (max-width: 1600px) {
    height: 75px;
  }
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
  @media (prefers-reduced-motion: no-preference) {
    ${props =>
    props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 10px 30px -10px var(--white-shadow);
      `};
    ${props =>
    props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--white-shadow);
      `};
  }
`;

const Nav_Styled = styled.nav`
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    width: 100%;
    color: var(--strong-black);
    font-family: var(--font-mono);
    z-index: 12;
    @media (max-width: 768px) {
      ${({ theme }) => theme.mixins.flexEnd};
    }
`;

const Links_Styled = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-md);
      a {
        color: var(--strong-black);
        padding: 10px;
      }
      a:hover {
        color: var(--violet);
      }
    }
  }
  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-md);
  }
  @media (max-width: 1600px) {
    ol li {
      font-size: var(--fz-sm);
    }
  }
`;

const Nav = ({ isMainPage }) => {
  const [isMounted, setIsMounted] = useState(isMainPage === true ? false : true);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isMainPage ? 2000 : 0;
  const fadeClass = isMainPage ? 'fade' : '';
  const fadeDownClass = isMainPage ? 'fadedown' : '';

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <Header_Styled scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <Nav_Styled>
          <>
            <Links_Styled>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navbarLinks &&
                    navbarLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                        <li key={i} style={{ transitionDelay: `${isMainPage ? i * 100 : 0}ms` }}>
                          <Link to={url}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div style={{ transitionDelay: `${isMainPage ? navbarLinks.length * 100 : 0}ms` }}>
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </Links_Styled>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
      </Nav_Styled>
    </Header_Styled>
  );
};

export default Nav;