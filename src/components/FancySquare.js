import React from "react"
import { Link } from "gatsby"
import { motion } from 'framer-motion'

import styles from '../styles/FancySquare.module.scss'
import IconLink from './IconLink'
import { GrInspect } from 'react-icons/gr'
import { useSpring, animated } from 'react-spring'

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
      ( l, i ) => iconLinks.push( <IconLink data={l} key={i} /> )
    )
  }

  const style = useSpring({scale: 1, from: {scale: 0}})

  return (
    // <animated.article
    <article
      className={styles.FancySquare}
      // style={style}
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
                <motion.span 
                  className={styles.iconLink}
                  whileHover={{ scale: 1.25, color: '#fefefe', opacity: 0.85 }}
                >
                  <GrInspect />
                </motion.span>
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
    {/* </animated.article> */}
    </article>
  )
}
export default FancySquare
