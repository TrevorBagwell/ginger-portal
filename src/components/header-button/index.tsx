import React, { FC, ReactElement } from 'react'
import classNames from 'classnames'
import styles from './HeaderButton.module.css'
import { useRouter } from 'next/router'
import { capitalizeFirst } from 'utils/string-mutate'
import { globalTheme } from 'constants/theme'

const HeaderButton: FC<{
	displayText: string
	redirectPath: string
}> = (props): ReactElement => {
	const theme = React.useMemo(() => globalTheme, [])
	const { displayText, redirectPath } = props
	const router = useRouter()
	const pathname = React.useMemo(() => router.pathname.slice(1), [router.pathname])
	const selected = React.useMemo(() => pathname === redirectPath, [router.pathname])

	const handleClick = React.useCallback(() => {
		if (!selected) {
			router.push(redirectPath)
		}
	}, [redirectPath, selected])

	return (
		<div className={styles.root} data-theme={theme}>
			<div
				className={classNames(styles.text, { [styles.selected]: selected })}
				onClick={handleClick}
			>
				{capitalizeFirst(displayText)}
			</div>
		</div>
	)
}

export default HeaderButton
