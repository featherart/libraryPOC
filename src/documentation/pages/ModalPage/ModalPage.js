import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Modal } from '../../../components/Modal'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description } from './config'
import style from '../pageStyles.less'

const code = `
<Modal
  title={'Hi Title'}
  openMessage={'Open Me'}
  content={'${description.slice(0, 45)}'}
  onConfirm={() => console.log('confirmed')}
  onCancel={() => console.log('cancelled')}
  />
`.trim()

export const ModalPage = () => (
  <div className={style.pageContainer}>
    <div className={style.title}>Modal</div>
    <Description description={description} />
    <div>
      <LiveProvider code={code} theme={theme} scope={{ Modal }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={style.displayArea} />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
