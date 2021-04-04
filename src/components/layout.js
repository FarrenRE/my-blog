import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import { BiLeftArrowAlt } from 'react-icons/bi'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/"><BiLeftArrowAlt /></Link>
        </div>
        {/* <Navigation /> */}
      </header>
      {children}
      <footer className="site-footer">
        <div className="site-title">
          <Link to="/"><BiLeftArrowAlt /></Link>
        </div>
        <p>{new Date().getFullYear()} &ndash; farrenre.com</p>
      </footer>
    </div>
  )
}
