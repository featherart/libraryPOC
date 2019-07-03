import React from 'react'
//import { render } from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Modal } from '../../../components/Modal'
import { Button } from '../../../components/Button'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description } from './config'
import '../pageStyles.less'

const code = `
function openModal() {
  return (
    <Modal
      trigger={'button'}
      triggerMessage={'Click Me'}
      title={'Hi Title'}
      openMessage={'Open Me'}
      content={'${description.slice(0, 45)}'}
      onConfirm={() => console.log('confirmed')}
      onCancel={() => console.log('cancelled')}
    />
  )
}
`.trim();

export const ModalPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>Modal</div>
    <Description description={description} />
    <div>
      <LiveProvider code={code} theme={theme} scope={{ Modal, Button }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea'} />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
