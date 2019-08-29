import React from 'react'
import cx from 'classnames'
import './progress.less'

import { ProgressGroup } from './ProgressGroup'

const determinWidth = (progress, total) => progress / total * 100 + '%'
const determinColorClass = (key) => (key === 0 ? 'dark' : 'light')

const ProgressBar = ({ width, colorClass }) => <div className={'bar bar-' + colorClass} style={{ width: width }} />

const generateBars = (progress, total) => {
	return progress
		.map((item, key) => {
			return {
				progress: item,
				colorClass: determinColorClass(key),
				width: determinWidth(item, total)
			}
		})
		.map((bar, key) => <ProgressBar key={key} colorClass={bar.colorClass} width={bar.width} />)
}

export const Progress = ({ progress, total = 100, className, color }) => {
	const styleClasses = cx(color, { multiple: !!progress.length })
	const classes = cx('ui', 'progress', className, styleClasses)
	const bars = generateBars(progress, total)
	return <div className={classes}>{bars}</div>
}

// sub components.
Progress.Group = ProgressGroup
