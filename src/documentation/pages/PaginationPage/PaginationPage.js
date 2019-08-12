import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Pagination } from '../../../components/Pagination'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { attributes, description } from './config'
import '../pageStyles.less'

const code = `
  <Pagination />
`.trim();

export const PaginationPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>Pagination</div>
    <Description description={description} />
    <div>
      <LiveProvider code={code} theme={theme} scope={{ Pagination }}>
        <LiveEditor />
        <LiveError />
        <LivePreview className={'displayArea'} />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
