import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'
import { Button } from '../../../components'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description } from './config'
import '../pageStyles.less'

const code = `
render(
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 200px [col-start])', gridRowGap: '25px', gridColumnGap: '25px' }}>
    <Button primary>hi!</Button>
    <Button flat>hi!</Button>
    <Button primary>hi!</Button>
    <Button primary>hi!</Button>
    <Button primary>hi!</Button>
    <Button primary>hi!</Button>
  </div>
)
`.trim()

export const ButtonPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>Brand Buttons</div>
    <Description description={description} />
    <LiveProvider code={code} scope={{ Button }} theme={theme} noInline>
      <LiveEditor />
      <LiveError />
      <LivePreview className={'displayArea'} />
    </LiveProvider>
    <PropsTable attributes={attributes} />
  </div>
)
