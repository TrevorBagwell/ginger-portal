import React, { FC, ReactElement } from 'react'

import styles from '../../styles/Projects.module.css'
import { useRouter } from 'next/router'
import Module from 'components/module'

// Have a hovering sidebar that can take you to the different projects or can filter
// on different categories
// Make project cards
// Make a page for each project
const Projects: FC = (): ReactElement => {
	const router = useRouter()
	const path = React.useMemo(() => router.pathname.slice(1), [router.pathname])

	return <Module>{`${path || 'Source Home'} page`}</Module>
}

export default Projects
