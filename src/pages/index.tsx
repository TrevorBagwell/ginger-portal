import React, { FC, ReactElement } from 'react'

import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Module from 'components/module'

const Home: FC = (): ReactElement => {
	const router = useRouter()
	const path = React.useMemo(() => router.pathname.slice(1) || '', [router.pathname])

	return <Module>{`${path || 'Source Home'} page` }</Module>
}

export default Home
