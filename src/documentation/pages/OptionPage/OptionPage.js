import React from 'react'
import { Option } from '../../../components/Option'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { LiveEditorWrapper } from '../LiveEditorWrapper'
import { attributes, description, toggleDescription } from './config'
import '../pageStyles.less'

const code = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '25px 25px' }}>
  <Option type='toggle' label='base toggle' />
  <Option type='toggle' label='checked' checked />
  <Option type='toggle' label='disabled' disabled />
  <Option type='toggle' label='both checked and disabled' disabled checked />
</div>
`.trim()

export const OptionPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>Option</div>
    <Description description={description} />
    <div className='subTitle'>Toggles</div>
    <Description description={toggleDescription} />
    <LiveEditorWrapper component={{Option}} code={code} />
    <PropsTable attributes={attributes} />
  </div>
)
