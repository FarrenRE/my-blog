import React from "react"
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import FancySquare from '../components/FancySquare'
import { animated, useTrail } from 'react-spring'
import styles from '../styles/index.module.scss'

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  console.log(`edges.length = ${edges.length}`);
  const trail = useTrail(edges.length, {
    from: {
      opacity: 0,
      left: '-20px'
    },
    to: { 
      opacity: 1,
      left: '0'
    }
  })
  console.log(trail)

  return (
    <>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="squares">
        {trail.map( ( props, i ) => (
          <>
            <animated.div
              className={ styles.animContainer }
              style={ props }
            >
              <FancySquare 
                key={edges[i].node.id} 
                post={edges[i].node} 

              />
            </animated.div>
            
          </>
        ) )}
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
  allMarkdownRemark(sort: {order: [ASC, DESC], fields: [frontmatter___order, frontmatter___date]}, filter: {frontmatter: {draft: {ne: true}}}) {
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
