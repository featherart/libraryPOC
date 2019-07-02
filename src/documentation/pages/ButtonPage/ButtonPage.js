import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'
import { Button } from '../../../components'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description } from './config'
import style from '../pageStyles.less'

const example = `
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
  <div className={style.pageContainer}>
    <div className={style.title}>Brand Buttons</div>
    <Description description={description} />
    <LiveProvider code={example} scope={{ Button }} theme={theme} noInline>
      <LiveEditor />
      <LiveError />
      <LivePreview className={style.displayArea} />
    </LiveProvider>
    <PropsTable attributes={attributes} />
  </div>
)
