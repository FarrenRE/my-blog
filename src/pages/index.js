import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import FancySquare from '../components/FancySquare'
// import { useTrail } from 'react-spring/renderprops'

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .map(
      edge => 
        <FancySquare 
          key={edge.node.id} 
          post={edge.node} 
        />
      )

  return (
    <>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      {/* {trail.map(({ opacity }, index) => (
        items[index]
      ))} */}
      <div className="squares">
        {Posts}
      </div>
    </>
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
