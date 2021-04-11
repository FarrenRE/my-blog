import React from "react"
import { Link } from "gatsby"
import styles from '../styles/FancySquare.module.scss'

// icons
import { FaEllipsisH } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'
import { GrInspect, GrGithub, GrLinkedin, GrStackOverflow } from 'react-icons/gr'
import { FaRavelry } from 'react-icons/fa'

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

            {/* External path */}
            {post.frontmatter.externalPath && 
              <a
                href={post.frontmatter.externalPath}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal />
              </a>
            }

            {/* Socials */}
            {post.frontmatter.github &&
              <a
                href={post.frontmatter.github}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrGithub />
              </a>
            }
            {post.frontmatter.linkedin &&
              <a
                href={post.frontmatter.linkedin}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrLinkedin />
              </a>
            }
            {post.frontmatter.stackoverflow &&
              <a
                href={post.frontmatter.stackoverflow}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrStackOverflow />
              </a>
            }
            {post.frontmatter.ravelry &&
              <a
                href={post.frontmatter.ravelry}
                className={styles.iconLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRavelry />
              </a>
            }

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
