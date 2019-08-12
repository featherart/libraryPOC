import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Option } from '../../../components/Option'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
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
    <div>
      <LiveProvider code={code} theme={theme} scope={{ Option }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea'} />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
