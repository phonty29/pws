import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '../components';
import { IconBookmark } from '../components/icons';

const Main_Styled = styled.main`
  & > header {
    margin-bottom: 100px;
    text-align: center;
    span {
      color: var(--browny);
    }
  }
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
    color: var(--browny);
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

const Blogs = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      <Helmet title="Blogs" />

      <Main_Styled>
        <header>
          <h1 className="big-heading">Blogs</h1>
          <p className="subtitle">
            <span>
              a collection of my posts
            </span>
          </p>
        </header>

        <Grid_Styled>
          {posts.length > 0 &&
            posts.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, date, slug, tags } = frontmatter;
              const formattedDate = new Date(date).toLocaleDateString();

              return (
                <Post_Styled key={i}>
                  <div className="post__inner">
                    <header>
                      <div className="post__icon">
                        <IconBookmark />
                      </div>
                      <h5 className="post__title">
                        <Link to={slug}>{title}</Link>
                      </h5>
                    </header>

                    <footer>
                      <span className="post__date">{formattedDate}</span>
                      <ul className="post__tags">
                        {tags.map((tag, i) => (
                          <li key={i}>
                            <Link to={`/blogs/tags/${kebabCase(tag)}/`} className="inline-link">
                              #{tag}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </div>
                </Post_Styled>
              );
            })}
        </Grid_Styled>
      </Main_Styled>
    </Layout>
  );
};

export default Blogs;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blogs/posts/" } }
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
`;