import React, { useState } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Pagination } from '../../../components/Pagination'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import '../pageStyles.less'
import { attributes, description } from './config'

const code = `
function mountPagination() {
  const [current, setCurrent] = useState(1)
  return (
    <Pagination total={100} current={current} onChange={() => setCurrent(current)} />
  )
}
`.trim();

export const PaginationPage = () => (
  <div className={'pageContainer'}>
    <div className={'title'}>Pagination</div>
    <div className='subTitle'>Default Pagination</div>
    <Description description={description} />
    <div>
      <LiveProvider code={code} theme={theme} scope={{ Pagination, useState }}>
        <LivePreview className={'displayArea small'} />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </div>
    <PropsTable attributes={attributes} />
  </div>
)
