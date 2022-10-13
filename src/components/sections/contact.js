import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { scrollRevealConfig, email } from '../../config';
import ScrollReveal from 'scrollreveal';

const scrollRevealing = typeof window === 'undefined' ? null : ScrollReveal();

const Contact_Styled = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--greeny);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }
    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
    color: var(--violet);
  }
  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    scrollRevealing.reveal(revealContainer.current, scrollRevealConfig());
  }, []);

  return (
    <Contact_Styled id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        My inbox is always open for you.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </Contact_Styled>
  );
};

export default Contact;