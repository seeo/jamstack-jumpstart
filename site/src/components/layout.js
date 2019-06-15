/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Nav from "./Nav";
//running a graphQL query inside of Layout component

export default function Layout({ children }) {
    const data = useStaticQuery(graphql`
  query SiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
    <div>
        <Nav />
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
    </div>
  )
}
