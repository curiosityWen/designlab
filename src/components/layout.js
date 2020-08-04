import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          buildTime(formatString: "YYYY-MM-DD hh:mm a z")
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div id="up"></div>
      {children}
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
