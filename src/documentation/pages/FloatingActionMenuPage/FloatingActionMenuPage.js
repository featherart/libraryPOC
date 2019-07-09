import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'
import { FloatingActionMenu } from '../../../components/FloatingActionMenu'
import { Tooltip, Icon } from '../../../components'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description } from './config'
import '../pageStyles.less'

const code = `
<FloatingActionMenu
  actions={[
    {icon: 'network-fill', tooltip: 'Create Interactive Job', onClick: () => console.log('clicked 1')},
    {icon: 'hierarchy-fill', tooltip: 'Create Maglev Job', onClick: () => console.log('clicked 2')},
    {icon: 'ngc-resources', tooltip: 'Create Batch', onClick: () => console.log('clicked 3')}
  ]}
/>
`.trim();

export const FloatingActionMenuPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>FloatingActionMenu</div>
    <Description description={description} />
    <div>
      <LiveProvider code={code} theme={theme} scope={{ FloatingActionMenu, Tooltip, Icon }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea'} />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
