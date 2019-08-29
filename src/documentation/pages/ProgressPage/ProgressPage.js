import React from 'react'
import { Progress } from '../../../components/Progress'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { LiveEditorWrapper } from '../LiveEditorWrapper'
import { attributes, description } from './config'
import '../pageStyles.less'

const code = `
<Progress progress={[49]} />
`.trim()


export const ProgressPage = () => (
	<div className={'pageContainer'}>
		<div className={'title'}>Progress</div>
		<Description description={description} />
		<div className='subTitle'>Default (Green)</div>
		<LiveEditorWrapper component={{ Progress }} code={code} />
		<PropsTable attributes={attributes} />
	</div>
)
