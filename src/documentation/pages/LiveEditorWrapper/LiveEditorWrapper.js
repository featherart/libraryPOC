import React, { useState } from 'react'
import cx from 'classnames'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Button } from '../../../components/Button'
import { theme } from '../theme'
import './liveEditorWrapper.less'

const LiveEditorWrapper = ({ component, code, inLine, dark, small }) => {
	const [ showCode, toggleShowCode ] = useState(true)
	const classes = cx('displayArea', { small }, { dark })
	return (
		<LiveProvider code={code} scope={component} theme={theme} noInline={inLine}>
			<LivePreview className={classes} />
			{showCode && <LiveEditor />}
			<LiveError />
			<Button className='show-hide-button' defaultStyle neutral onClick={() => toggleShowCode(!showCode)}>
				{showCode ? 'Hide Code' : 'Show Code'}
			</Button>
		</LiveProvider>
	)
}

export { LiveEditorWrapper }
