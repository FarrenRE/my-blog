import React from "react"
import { Link } from "gatsby"
import styles from '../styles/FancySquare.module.scss'
import { FaEllipsisH } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

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
        <div className={styles.header}>
          <h1>
            {post.frontmatter.title} {post.frontmatter.pinned}
          </h1>
        </div>
        <div className={styles.body}>
          <Link
            to={post.frontmatter.path}
            className={styles.link}
          >
            <FaEllipsisH />
          </Link>
          <Link
            to={post.frontmatter.path}
            className={styles.link}
          >
            <BiLinkExternal />
          </Link>
        </div>
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
