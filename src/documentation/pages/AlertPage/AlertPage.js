import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'
import { Alert } from '../../../components'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description } from './config'
import '../pageStyles.less'

const code = `
  <Alert />
`.trim()

export const AlertPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>Alerts</div>
    <Description description={description} />
    <LiveProvider code={code} scope={{ Alert }} theme={theme}>
      <LiveEditor />
      <LiveError />
      <LivePreview className={'displayArea'} />
    </LiveProvider>
    <PropsTable attributes={attributes} />
  </div>
)
