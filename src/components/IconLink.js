import React from "react"
import styles from "../styles/IconLink.module.scss"

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
    <a 
      href={props.data.url}
      className={styles.iconLink}
    >
      {icon}
    </a>
  )
}
export default IconLink
