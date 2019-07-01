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
    <Button default />
    <Button primary />
    <Button default />
    <Button primary />
    <Button default />
  </div>
)
`.trim()

export const ButtonPage = () => (
  <div className={style.pageContainer}>
    <div className={style.title}>Button</div>
    <Description description={description} />
    <div>
      <ul>
        <li>
        <b>Brand Buttons</b> feature a Brand Green color scheme and are the preferred style for Primary, Default and Flat button types.
        </li>
        <li>
          <b>Neutral Buttons</b> feature a Dark Gray color scheme and are available to use as an alternative to the preferred style.
        </li>
        <li>
          <b>Disabled Buttons</b> are Light Gray and used when the user cannot proceed until an input is collected.
        </li>
        <li>
          <b>Danger Buttons</b> are Accent Red and have a different visual style to inform users of potential dangerous actions they are about to take.
        </li>
      </ul>
    </div>
    <LiveProvider code={example} scope={{ Button }} theme={theme} noInline>
      <LiveEditor />
      <LiveError />
      <LivePreview className={style.displayArea} />
    </LiveProvider>
    <PropsTable attributes={attributes} />
  </div>
)
