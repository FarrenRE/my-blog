import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from '../styles/blogTemplate.module.scss'

// icons
import { BiLinkExternal } from 'react-icons/bi'
import { GrGithub, GrLinkedin, GrStackOverflow } from 'react-icons/gr'
import { FaRavelry } from 'react-icons/fa'


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div className={styles.externalLinks}>

            {/* External path */}
            {frontmatter.externalPath && 
              <a
                href={frontmatter.externalPath}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal />
              </a>
            }

            {/* Socials */}
            {frontmatter.github &&
              <a
                href={frontmatter.github}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrGithub />
              </a>
            }
            {frontmatter.linkedin &&
              <a
                href={frontmatter.linkedin}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedin />
              </a>
            }
            {frontmatter.stackoverflow &&
              <a
                href={frontmatter.stackoverflow}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrStackOverflow />
              </a>
            }
            {frontmatter.ravelry &&
              <a
                href={frontmatter.ravelry}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRavelry />
              </a>
            }

          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
        externalPath
        github
        ravelry
        linkedin
      }
    }
  }
`