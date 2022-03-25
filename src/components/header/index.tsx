import React, { FC, ReactElement } from 'react'
import styles from './Header.module.css'

import { paths } from 'constants/paths'
import HeaderButton from 'components/header-button'

const Header: FC = (): ReactElement => {
	const theme = React.useMemo(()=>'light',[])
	const renderButton = React.useCallback((e) => {
		return <HeaderButton key={e} displayText={e} redirectPath={e} />
	}, [])

	return (
		<div className={styles.root} data-theme={'light'}>
			{paths.map(renderButton)}
		</div>
	)
}

export default Header
