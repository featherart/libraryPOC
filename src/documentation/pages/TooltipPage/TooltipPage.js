import React from 'react'
import { Tooltip } from '../../../components/Tooltip'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description, darkDescription, semanticDescription } from './config'
import '../pageStyles.less'

const code = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '50px 50px', padding: '25px' }}>
  <Tooltip
    header={'Booty'}
    message={'Here is the treasure.'}>
    <span>top</span>
  </Tooltip>
  <Tooltip
    position={'right'}
    header={'Right Here'}
    message={'Right content here.'}>
    <span>right</span>
  </Tooltip>
  <Tooltip
    position={'bottom'}
    header={'Bottom'}
    message={'Bottom here.'}>
    <span>bottom</span>
  </Tooltip>
  <Tooltip
    position={'left'}
    message={'Left, no header.'}>
    <span>left</span>
  </Tooltip>
</div>
`.trim()

const darkCode = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '50px 50px', padding: '25px' }}>
  <Tooltip
    dark
    header={'Booty'}
    message={'Here is the treasure.'}>
    <span>top</span>
  </Tooltip>
  <Tooltip
    dark
    position={'right'}
    header={'Right Here'}
    message={'Right content here.'}>
    <span>right</span>
  </Tooltip>
  <Tooltip
    dark
    position={'bottom'}
    header={'Bottom'}
    message={'Bottom here.'}>
    <span>bottom</span>
  </Tooltip>
  <Tooltip
    dark
    position={'left'}
    message={'Left, no header.'}>
    <span>left</span>
  </Tooltip>
</div>
`.trim()

const semanticCode = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '50px 50px', padding: '25px' }}>
  <Tooltip
    success
    header={'Success'}
    message={'Here is the treasure.'}>
    <span>top</span>
  </Tooltip>
  <Tooltip
    information
    position={'right'}
    header={'Information'}
    message={'You might want to know.'}>
    <span>right</span>
  </Tooltip>
  <Tooltip
    warning
    position={'bottom'}
    header={'Warning'}
    message={'Bottom here.'}>
    <span>bottom</span>
  </Tooltip>
  <Tooltip
    danger
    position={'left'}
    header={'Danger'}
    message={'Beware of pirates!'}>
    <span>left</span>
  </Tooltip>
</div>
`.trim()

export const TooltipPage = () => (
  <div className='pageContainer'>
    <div className='title'>Tooltips</div>
    <div className='subTitle'>Default Styling</div>
    <Description description={description} />
    <div>
      <LiveProvider code={code} theme={theme} scope={{ Tooltip }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea'} />
      </LiveProvider>
    </div>
    <div className='subTitle'>Dark Styling</div>
    <Description description={darkDescription} />
    <div>
      <LiveProvider code={darkCode} theme={theme} scope={{ Tooltip }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea'} />
      </LiveProvider>
    </div>
    <div className='subTitle'>Semantic Styling</div>
    <Description description={semanticDescription} />
    <div>
      <LiveProvider code={semanticCode} theme={theme} scope={{ Tooltip }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea'} />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
