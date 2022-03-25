import React, {FC, ReactElement} from 'react'

import styles from '../../styles/About.module.css'
import { useRouter } from 'next/router'
import Module from 'components/module'

const About: FC = () : ReactElement => {
  const router = useRouter()
  const path = React.useMemo(()=>router.pathname.slice(1),[router.pathname])


  return <Module>{`${path || 'Source Home'} page` }</Module>
}

export default About
