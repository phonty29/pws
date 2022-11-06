import React, {useEffect, useRef} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import kebabCase from 'lodash/kebabCase';
import styled from 'styled-components';
import { IconBookmark } from '../../components/icons';
import { scrollRevealConfig } from '../../config';
import ScrollReveal from 'scrollreveal';

const scrollRevealing = typeof window === 'undefined' ? null : ScrollReveal();

const Blog_Styled = styled.section`
  max-width: 900px;
  footer {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    margin-top: 20px;
  }
`;

const Grid_Styled = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 50px;
  position: relative;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const Post_Styled = styled.li`
  transition: var(--transition);
  cursor: default;
  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post__inner {
        transform: translateY(-7px);
      }
    }
  }
  a {
    position: relative;
    z-index: 1;
  }
  .post__inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    background-color: var(--snow);
    header,
    a {
      width: 100%;
    }
  }
  .post__icon {
    ${({ theme }) => theme.mixins.flexBetween};
    color: var(--violet);
    margin-bottom: 30px;
    margin-left: -5px;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .post__title {
    margin: 0 0 10px;
    color: var(--strong-black);
    font-size: var(--fz-xxl);
    a {
      position: static;
      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
  .post__desc {
    color: var(--browny);
    font-size: 17px;
  }
  .post__date {
    color: var(--greeny);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    text-transform: uppercase;
  }
  ul.post__tags {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      color: var(--violet);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/posts/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
                title
                date
                slug
                tags
            }
            html
          }
        }
      }
    }
  `);
  const postsData = data.posts.edges;

  const revealContainer = useRef(null);
  useEffect(() => {
    scrollRevealing.reveal(revealContainer.current, scrollRevealConfig());
  }, []);

  return (
      <Blog_Styled id="blog" ref={revealContainer}>
        <div className="section-header">
          <h2>I like to share things in my head</h2>
          <a className="inline-link archive-link" href="/blog">
              see my blog
          </a>
        </div>

        <Grid_Styled>
          {postsData.length > 0 &&
            postsData.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, date, slug, tags } = frontmatter;
              const formattedDate = new Date(date).toLocaleDateString();

              if (i < 4) {
                return (
                    <Post_Styled key={i}>
                      <div className="post__inner">
                        <header>
                          <div className="post__icon">
                            <IconBookmark />
                          </div>
                          <h5 className="post__title">
                            <a href={slug} target="_blank">{title}</a>
                          </h5>
                        </header>
    
                        <footer>
                          <span className="post__date">{formattedDate}</span>
                          <ul className="post__tags">
                            {tags.map((tag, i) => (
                              <li key={i}>
                                <a href={`/blog/tags/${kebabCase(tag)}/`} className="inline-link" target="_blank">
                                  #{tag}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </footer>
                      </div>
                    </Post_Styled>
                  );
              } else return;
            })}
        </Grid_Styled>
      </Blog_Styled>
  );
};

export default Blog;