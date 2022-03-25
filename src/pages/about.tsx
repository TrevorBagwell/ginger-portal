import React, {FC, ReactElement} from 'react'

import styles from '../../styles/About.module.css'
import { useRouter } from 'next/router'
import Module from 'components/module'

// Must contain nice pictures
// Must contain my name, birthdate, and address
// Must contain a few descriptive blocks:
// 1. Skills / Short Bio
// 2. Education
// 3. Personal / Hobbies
// Think picture block, block picture, picture block
// Must contain contact info and socials at bottom

const About: FC = () : ReactElement => {
  const router = useRouter()
  const path = React.useMemo(()=>router.pathname.slice(1),[router.pathname])
  

  return <Module>{`${path || 'Source Home'} page` }</Module>
}

export default About
