import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'
import { Button } from '../../../components'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { LiveEditorWrapper } from '../LiveEditorWrapper'
import {
  attributes,
  description,
  utilityDescription,
  dangerDescription
} from './config'
import '../pageStyles.less'

const code = `
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
`.trim()

const utilityCode = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '25px 25px' }}>
  <Button primary neutral>Primary Neutral</Button>
  <Button primary neutral disabled>Primary Neutral</Button>
  <Button defaultStyle neutral>Default Neutral</Button>
  <Button defaultStyle neutral disabled>Disabled</Button>
  <Button flat neutral>Flat Neutral</Button>
  <Button flat disabled>Flat Disabled</Button>
</div>
`.trim()

const dangerCode = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '25px 25px' }}>
  <Button primary danger>Primary Danger</Button>
  <Button primary danger disabled>Disabled</Button>
  <Button defaultStyle danger>Default Danger</Button>
  <Button defaultStyle danger disabled>Disabled</Button>
  <Button flat danger>Flat Danger</Button>
  <Button flat danger disabled>Disabled</Button>
</div>
`.trim()

export const ButtonPage = () => (
  <div className='pageContainer'>
    <div className='title'>Buttons</div>
    <div className='subTitle'>Brand Buttons</div>
      <Description description={description} />
      <LiveEditorWrapper component={{Button}} code={code} />
    <div className='subTitle'>Utility Buttons</div>
      <Description description={utilityDescription} />
      <LiveEditorWrapper component={{Button}} code={utilityCode} />
    <div className='subTitle'>Danger Buttons</div>
      <Description description={dangerDescription} />
      <LiveEditorWrapper component={{Button}} code={dangerCode} />
    <PropsTable attributes={attributes} />
  </div>
)
