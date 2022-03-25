import React, { FC, ReactElement } from 'react'
import NextImage from 'next/image'

import styles from './Image.module.css'

const Image: FC<{
	className?: string
	height?: number
	layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive'
	objectFit?: any
	objectPosition?: any
	priority?: boolean
	src: string
	width?: number
}> = (props): ReactElement => {

	return <NextImage {...props} />
}

export default Image
