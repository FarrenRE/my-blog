import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
// import PostLink from "../components/post-link"
import FancySquare from '../components/FancySquare'
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .map(edge => <FancySquare key={edge.node.id} post={edge.node} />)

  return (
    <div className="squares">
      {Posts}
    </div>
  )
}

export default IndexPage
export const pageQuery = graphql`
query indexPageQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {draft: {ne: true}}}) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          order
          tagline
          links
        }
      }
    }
  }
}
`
