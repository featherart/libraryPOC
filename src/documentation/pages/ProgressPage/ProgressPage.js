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

const customCode = `
<Progress progress={[50, 80]} total={150} />
`.trim()

const tealCode = `
<Progress color={'teal'} progress={[20, 50]} total={175} />
`.trim()

const blueCode = `
<Progress color={'blue'} progress={[43, 65]} />
`.trim()

const purpleCode = `
<Progress color='purple' progress={[20, 65]} />
`.trim()

const orangeCode = `
<Progress color='orange' progress={[20, 60]} total={175} />
`.trim()

const redCode = `
<Progress color='red' progress={[20, 60]} total={140} />
`.trim()

export const ProgressPage = () => (
	<div className='pageContainer'>
		<div className='title'>Progress</div>
		<Description description={description} />
		<div className='subTitle'>Default (Green)</div>
		<LiveEditorWrapper small component={{ Progress }} code={code} />
		<div className='subTitle'>Custom Total</div>
		<LiveEditorWrapper small component={{ Progress }} code={customCode} />
		<div className='subTitle'>Teal Progress</div>
		<LiveEditorWrapper small component={{ Progress }} code={tealCode} />
		<div className='subTitle'>Blue Progress</div>
		<LiveEditorWrapper small component={{ Progress }} code={blueCode} />
		<div className='subTitle'>Purple Progress</div>
		<LiveEditorWrapper small component={{ Progress }} code={purpleCode} />
		<div className='subTitle'>Orange Progress</div>
		<LiveEditorWrapper small component={{ Progress }} code={orangeCode} />
		<div className='subTitle'>Red Progress</div>
		<LiveEditorWrapper small component={{ Progress }} code={redCode} />
		<PropsTable attributes={attributes} />
	</div>
)
