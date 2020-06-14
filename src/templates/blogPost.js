import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "./templates.css";

const Template = ({ data, pageContext }) => {

  const { next, prev } = pageContext;

  const { markdownRemark } = data;
  
  const title = markdownRemark.frontmatter.title;
  const date = markdownRemark.frontmatter.date;
  // const twiter = markdownRemark.frontmatter.twiter;
  const html = markdownRemark.html;

  return (
    <Layout>
      <SEO title={title} />
      <div className="page">
        <h1>{title}</h1>
        <p className="page-date">{date}</p>
        {/* <a
          href={twiter}
          target="_blank"
          rel="noopener noreferrer"
          className="page-share"
        >
          
        </a> */}
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
        
        {next&&<Link to={next.frontmatter.path}>Next</Link>}
        {prev&&<Link to={prev.frontmatter.path}>Prev</Link>}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        twiter
      }
    }
  }
`;
export default Template;
