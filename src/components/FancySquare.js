import React from "react"
import { Link } from "gatsby"
import styles from '../styles/FancySquare.module.scss'
import { FaEllipsisH } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

const FancySquare = ({ post }) => {
  return (
    <article
      className={styles.FancySquare}
      style={{order: post.frontmatter.order}}
      id={ // set id from title
        post.frontmatter.title
          .split(/[., !\/\(\):'"]/, -1)
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

          {/* Conditionally render path */}
          {post.excerpt.toString() !== '' && 
            <Link
              to={post.frontmatter.path}
              className={styles.link}
            >
              <FaEllipsisH />
            </Link>
          }

          {/* Conditionally render external path */}
          {post.frontmatter.externalPath && 
            <a
              href={post.frontmatter.externalPath}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal />
            </a>
          }
        </div>
        <div className={styles.footer}>

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
