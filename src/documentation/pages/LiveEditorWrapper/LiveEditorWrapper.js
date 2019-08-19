import React, { useState } from 'react'
import cx from 'classnames'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Button } from '../../../components/Button'
import { theme } from '../theme'
import './liveEditorWrapper.less'

const LiveEditorWrapper = ({ component, code, inLine, dark, small }) => {
	const [ showCode, toggleShowCode ] = useState(false)
	const classes = cx('displayArea', { small }, { dark })
	return (
		<LiveProvider code={code} scope={component} theme={theme} noInline={inLine}>
			<LivePreview className={classes} />
			{showCode && <LiveEditor />}
			<LiveError />
      <div className='button-container'>
        <Button className='show-hide-button' flat neutral onClick={() => toggleShowCode(!showCode)}>
          {showCode ? 'Hide Editor' : 'Show Editor'}
        </Button>
      </div>
		</LiveProvider>
	)
}

export { LiveEditorWrapper }
