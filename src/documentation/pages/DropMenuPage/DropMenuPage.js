import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { DropMenu } from '../../../components/DropMenu'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { attributes, description } from './config'
import '../pageStyles.less'

const Description = ({ description }) => (
  <p className={'description'}>{description}</p>
)

const code = `
function mountDropMenu() {
  return (
    <DropMenu
      actions={
        [
          { icon: 'bin-line', action: 'Delete Item', danger: true, onClick: () => console.log('deleted') },
          { icon: 'star-line', action: 'Favorite Item'},
          { icon: 'sync-line', action: 'Forbidden Item', disabled: true, onClick: () => console.log('nope')}
        ]
      }
      handleClick={(e) => console.log('clicked', e)}
    />
  )
}
`.trim()

export const DropMenuPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>DropMenu</div>
    <Description description={description} />
    <div>
      <LiveProvider code={code} theme={theme} scope={{ DropMenu }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea'} />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
