import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Tooltip } from '../../../components/Tooltip'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description } from './config'
import '../pageStyles.less'

const code = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '50px 50px', padding: '25px' }}>
  <Tooltip
    header={'Yo Title'}
    message={'Here be treasure. Thar be dragons.'}>
      <span>top</span>
  </Tooltip>
  <Tooltip
    position={'right'}
    header={'Title Here'}
    message={'Right content here.'}>
      <span>right</span>
  </Tooltip>
  <Tooltip
    position={'bottom'}
    header={'Title'}
    message={'Bottom here.'}>
    <span>bottom</span>
  </Tooltip>
  <Tooltip
    position={'left'}
    header={'Title'}
    message={'Left here.'}>
    <span>left</span>
  </Tooltip>
</div>
`.trim();

export const TooltipPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>Tooltips</div>
    <Description description={description} />
    <div>
      <LiveProvider code={code} theme={theme} scope={{ Tooltip }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea'} />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
