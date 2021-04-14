import React from "react"
import { Link } from "gatsby"
import styles from '../styles/FancySquare.module.scss'
import IconLink from './IconLink'

// icons
import { GrInspect } from 'react-icons/gr'

const FancySquare = ({ post }) => {

  // construct array of objects from JSON to render as <IconLink>'s
  const iconLinks = []
  if(post.frontmatter.links) {
    const linkData = post.frontmatter.links
    const keys = Object.keys(linkData)
    const links = [];
    keys.map( 
      k => links.push({ "name": k, "url": linkData[k] })
    )
    links.map(
      l => iconLinks.push( <IconLink data={l} /> )
    )
  }

  return (
    <article
      className={styles.FancySquare}
      style={{order: post.frontmatter.order}}
      id={ // set id from title
        post.frontmatter.title
          .split(/[., !/():'"]/, -1)
          .filter(x => x) // remove empty [""] values
          .join('-')
          .toLowerCase()
      }
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1>
            {post.frontmatter.title}
          </h1>
        </div>
        <div className={styles.body}>

          

          {/* Conditionally render tagline */}
          {post.frontmatter.tagline &&
            <p>
              {post.frontmatter.tagline}
            </p>          
          }

        </div>
        <div className={styles.footer}>

          <div className={styles.links}>

            {/* Path to blog content */}
            {post.excerpt.toString() !== '' && 
              <Link
                to={post.frontmatter.path}
                className={styles.iconLink}
              >
                <GrInspect />
              </Link>
            }

            {/* Other links */}
            {iconLinks ? iconLinks : ''}

          </div>

          {/* Conditionally render date */}
          {post.frontmatter.date.toString() !== 'Invalid date' &&
            <span className={styles.date}>
              {post.frontmatter.date}
            </span>
          }
        </div>
      </div>
      {/* <span className={styles.close}>x</span> */}
    </article>
  )
}
export default FancySquare
