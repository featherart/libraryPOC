import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Tooltip } from '../../../components/Tooltip'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description } from './config'
import '../pageStyles.less'

const code = `
  <Tooltip header={'Title'} message={'Matey aye yardarm man-of-war hands ropes end rigging bilged on her anchor lugsail aft.'} />
`.trim();

export const TooltipPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>Tooltips</div>
    <Description description={description} />
    <div>
      <LiveProvider code={code} theme={theme} scope={{ Tooltip }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea dark'} />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
