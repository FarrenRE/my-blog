import React from "react"
import { Link } from "gatsby"
import styles from '../styles/FancySquare.module.scss'

const FancySquare = ({ post }) => (
  <article className={styles.FancySquare}>
    <div className={styles.inner}>
      <ul className={styles.ul}>
        <li>Title: {post.frontmatter.title}</li>
        <li>Date: {post.frontmatter.date}</li>
      </ul>
    </div>
    {/* <span className={styles.close}>x</span> */}
  </article>
)
export default FancySquare
