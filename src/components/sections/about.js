import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollReveal from 'scrollreveal';
import { scrollRevealConfig } from '../../config';

const scrollRevealing = typeof window === 'undefined' ? null : ScrollReveal();

const About_Styled = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const Text_Styled = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      color: var(--violet);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--violet);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
    @media (max-width: 300px) {
      display: flex;
      flex-direction: column;
    }
  }
`;
const Picture_Styled = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
  }
  @media (max-width: 500px) {
    display: grid;
    place-items: center;
    margin: 50px auto;
  }
  .wrapper {
    background-color: transparent;
    perspective: 1000px;
    width: 300px;
    height: 300px;
    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
    @media (max-width: 320px) {
      width: 200px;
      height: 200px;
    }
  }
  .img-inner {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  .wrapper:hover .img-inner {
    transform: rotateY(180deg);
  }
    .img-front, .img-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .img-front {
        img {
          max-height: 100%;
          object-fit: cover;
        }
    }
    .img-back {
        transform: rotateY(180deg); 
        border: 1px solid var(--violet);
        background: var(--violet-tint);
        display: grid;
        place-items: center;
        h1 {
            color: var(--violet);
        }
    }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    scrollRevealing.reveal(revealContainer.current, scrollRevealConfig());
  }, []);

  const skills = ['JavaScript', 'TypeScript', 'React', 'Redux', 'Node.js', 'Express JS', 'Testing'];

  return (
    <About_Styled id="about" ref={revealContainer}>
      <div className="section-header">
        <h2>Some information about me</h2>
        <a className="inline-link archive-link" href="/about" target="_blank">
            more about me
        </a>
      </div>

      <div className="inner">
        <Text_Styled>
          <div>
            <p>
              Good day, visitor! My name is Bekmuhamet and I'm a guy interested in science, technologies and engineering. 
              Now I'm working in the field of web-technologies, things that live on the Internet. My journey started in 2019, 
              where I was firstly introduced to the world of programming &amp; IT. I really love what I do, but also I try
              to develop and improve myself in different fields of human activity.
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://glovoapp.com/">a food-delivery</a>,{' '}
              <a href="https://buki.kz/">a platform for tutors</a>,{' '}
              <a href="https://www.a1qa.com/">a software testing company</a>.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </Text_Styled>

        <Picture_Styled>
          <div className="wrapper">
            <div className="img-inner">
                <div className="img-front">
                    <img src="./me.jpg" className="img" width={300} alt="Headshot"/>
                </div> 
                <div className="img-back">
                    <h1>Don't look at me</h1> 
                </div>               
            </div>
          </div>
        </Picture_Styled>
      </div>
    </About_Styled>
  );
};

export default About;