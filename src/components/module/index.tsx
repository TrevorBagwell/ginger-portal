import React, { FC, ReactElement } from 'react'
import styles from './Module.module.css'
import { globalTheme } from 'constants/theme'

const Module: FC<{}> = (props): ReactElement => {
	const theme = React.useMemo(() => globalTheme, [])
	return (
		<div className={styles.root} data-theme={theme}>
			<div className={styles.spacer} />
			{props?.children}
		</div>
	)
}

export default Module
