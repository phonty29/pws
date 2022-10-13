import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '../components';

const Post_Styled = styled.main`
  max-width: 1000px;
  padding: 200px 150px 50px 150px;
  @media (max-width: 768px) {
    padding: 100px 75px 25px 75px;
  }
  @media (max-width: 768px) {
    padding: 100px 75px 25px 75px;
  }
  @media (max-width: 520px) {
    padding: 50px 30px 15px 30px;
  }
`;
const Header_Styled = styled.header`
  margin-bottom: 50px;
  .tag {
    margin-right: 10px;
  }
`;
const Content_Styled = styled.div`
  margin-bottom: 100px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2em 0 1em;
  }
  p {
    margin: 1em 0;
    line-height: 1.5;
    color: var(--light-slate);
  }
`;

const Post = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, tags } = frontmatter;

  return (
    <Layout location={location}>
      <Helmet title={title} />

      <Post_Styled>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/blog">All posts</Link>
        </span>

        <Header_Styled>
          <h1 className="medium-heading">{title}</h1>
          <p className="subtitle">
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>&nbsp;&mdash;&nbsp;</span>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, i) => (
                <Link key={i} to={`/blog/tags/${kebabCase(tag)}/`} className="tag">
                  #{tag}
                </Link>
              ))}
          </p>
        </Header_Styled>

        <Content_Styled dangerouslySetInnerHTML={{ __html: html }} />
      </Post_Styled>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        date
        slug
        tags
      }
    }
  }
`;