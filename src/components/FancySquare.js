import React from "react"
import { Link } from "gatsby"
import styles from '../styles/FancySquare.module.scss'

const FancySquare = ({ post }) => {
  console.log(`pinned? ${post.frontmatter.pinned}`);
  return (
    <article
      className={`
        ${styles.FancySquare} 
        ${post.frontmatter.pinned ? 'pinned' : ''}
      `}
    >
      <div className={styles.inner}>
        <h1>
          {post.frontmatter.title} {post.frontmatter.pinned}
        </h1>
        <div className={styles.footer}>
          <span className={styles.date}>
            {post.frontmatter.date}
          </span>
        </div>
      </div>
      {/* <span className={styles.close}>x</span> */}
    </article>
  )
}
export default FancySquare
