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
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 200px [col-start])' }}>
    <Button primary />
    <Button default />
    <Button primary />
    <Button default />
    <Button primary />
    <Button default />
  </div>
)
`.trim()

export const ButtonPage = () => (
  <div className={styleMedia.pageContainer}>
    <div className={styleMedia.title}>Button</div>
    <Description description={description} />
    <LiveProvider code={example} scope={{ Button }} theme={theme} noInline>
      <LiveEditor />
      <LiveError />
      <LivePreview className={style.displayArea} />
    </LiveProvider>
    <PropsTable attributes={attributes} />
  </div>
)
