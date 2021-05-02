import React from "react"
import styles from "../styles/IconLink.module.scss"
import { motion } from 'framer-motion'

// icons
import { GrGithub, GrLinkedin, GrStackOverflow } from 'react-icons/gr'
import { FaRavelry } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

const IconLink = (props) => {

  let icon;

  console.log(`switch: ${props.data.name.toLowerCase()}`)
  
  switch( props.data.name.toLowerCase() ) {
    case 'external':
      icon = <BiLinkExternal />
      break
    case 'github':
      icon = <GrGithub />
      break
    case 'linkedin':
      icon = <GrLinkedin />
      break
    case 'stackoverflow':
      icon = <GrStackOverflow />
      break
    case 'ravelry':
      icon = <FaRavelry />
      break
    default:
      console.log(`IconLink: unrecognised link type "${props.data.name}"`)
  }

  return (
    <motion.a 
      href={props.data.url}
      className={styles.iconLink}
      whileHover={{ scale: 1.25, color: '#fefefe', opacity: 0.85 }}
    >
      {icon}
    </motion.a>
  )
}
export default IconLink
