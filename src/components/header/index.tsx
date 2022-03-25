import React, { FC, ReactElement } from 'react'
import styles from './Header.module.css'

import { paths } from 'constants/paths'
import HeaderButton from 'components/header-button'
import { globalTheme } from 'constants/theme'

const Header: FC = (): ReactElement => {
	const theme = React.useMemo(() => globalTheme, [])
	const renderButton = React.useCallback((e) => {
		return <HeaderButton key={e} displayText={e} redirectPath={e} />
	}, [])

	return (
		<div className={styles.root} data-theme={theme}>
			{paths.map(renderButton)}
		</div>
	)
}

export default Header
