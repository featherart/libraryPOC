import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'
import { Button } from '../../../components'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description, utilityDescription } from './config'
import '../pageStyles.less'

const code = `
render(
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '25px 25px' }}>
    <Button primary>Primary</Button>
    <Button primary accessible>Primary Accessible</Button>
    <Button primary disabled>Primary Disabled</Button>
    <Button defaultStyle>Default</Button>
    <Button defaultStyle accessible>Default Accessible</Button>
    <Button defaultStyle disabled>Default Disabled</Button>
    <Button flat>Flat</Button>
    <Button flat accessible>Flat Accessible</Button>
    <Button flat disabled>Flat Disabled</Button>
  </div>
)
`.trim()

const utilityCode = `
render(
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '25px 25px' }}>
    <Button primary neutral>Primary Neutral</Button>
    <Button primary neutral disabled>Primary Neutral</Button>
    <Button defaultStyle neutral>Default Neutral</Button>
    <Button defaultStyle neutral disabled>Disabled</Button>
    <Button defaultStyle>Default</Button>
    <Button defaultStyle accessible>Default Accessible</Button>
    <Button defaultStyle disabled>Default Disabled</Button>
    <Button flat>Flat</Button>
    <Button flat accessible>Flat Accessible</Button>
    <Button flat disabled>Flat Disabled</Button>
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
    <div className={'title'}>Utility Buttons</div>
    <Description description={utilityDescription} />
    <LiveProvider code={utilityCode} scope={{ Button }} theme={theme} noInline>
      <LiveEditor />
      <LiveError />
      <LivePreview className={'displayArea'} />
    </LiveProvider>
    <PropsTable attributes={attributes} />
  </div>
)
