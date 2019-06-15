/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Layout({ children }) {
  return (
    <div>
      <h1>My Website!</h1>
      {children}
    </div>
  )
}
