import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'
import { Icon, Tooltip } from '../../../components'
import { Description } from '../Description'
import { PropsTable } from '../PropsTable'
import {
  attributes,
  description,
  secondDescription
} from './config'
import '../pageStyles.less'

const code = `
<Icon name="check-circle-1-fill" />
`.trim()

const lineCode = `
<div className='iconTable' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '5px 5px' }}>
  <Tooltip dark position='bottom' message="arrow-up-line">
    <Icon name="arrow-up-line" />
  </Tooltip>
  <Tooltip dark position='bottom' message="arrow-right-line">
    <Icon name="arrow-right-line" />
  </Tooltip>
  <Tooltip dark position='bottom' message="arrow-left-line">
    <Icon name="arrow-left-line" />
  </Tooltip>
  <Tooltip dark position='bottom' message="arrow-down-line">
    <Icon name="arrow-down-line" />
  </Tooltip>

  <Icon name="arrow-double-up-line" />
  <Icon name="arrow-double-right-line" />
  <Icon name="arrow-double-left-line" />
  <Icon name="arrow-double-down-line" />

  <Icon name="close-line" />
  <Icon name="add-line" />
  <Icon name="subtract-line" />
  <Icon name="check-line" />

  <Icon name="help-circle-line" />
  <Icon name="add-circle-line" />
  <Icon name="subtract-circle-line" />
  <Icon name="check-circle-2-line" />

  <Icon name="infomation-circle-line" />
  <Icon name="check-circle-1-line" />
  <Icon name="warning-triangle-line" />
  <Icon name="account-circle-line" />

  <Icon name="account-group-line" />
  <Icon name="alarm-line" />
  <Icon name="clock-line" />
  <Icon name="stopwatch-line" />

  <Icon name="clock-line" />
  <Icon name="stopwatch-line" />
  <Icon name="calendar-line" />
  <Icon name="checklist-line" />

  <Icon name="check-line" />
  <Icon name="search-line" />
  <Icon name="zoom-in-line" />
  <Icon name="zoom-out-line" />

  <Icon name="cog-line" />
  <Icon name="view-line" />
  <Icon name="hide-line" />
  <Icon name="settings-line" />

  <Icon name="copy-1-line" />
  <Icon name="copy-2-line" />
  <Icon name="lock-open-line" />
  <Icon name="lock-close-line" />

  <Icon name="edit-circle-line" />
  <Icon name="bin-line" />
  <Icon name="binoculars-line" />
  <Icon name="sync-line" />

  <Icon name="revert-line" />
  <Icon name="history-line" />
  <Icon name="sync-warning-line" />
  <Icon name="star-line" />

  <Icon name="star-circle-line" />
  <Icon name="folder-line" />
  <Icon name="folder-add-line" />
  <Icon name="folder-edit-line" />

  <Icon name="folder-check-line" />
  <Icon name="folder-warning-line" />
  <Icon name="folder-lock-line" />
  <Icon name="folder-star-line" />

  <Icon name="file-line" />
  <Icon name="file-add-line" />
  <Icon name="file-subtract-line" />
  <Icon name="file-edit-line" />

  <Icon name="file-check-line" />
  <Icon name="file-warning-line" />
  <Icon name="file-error-line" />
  <Icon name="file-lock-line" />

  <Icon name="file-star-line" />
  <Icon name="server-line" />
  <Icon name="server-add-line" />
  <Icon name="server-subtract-line" />

  <Icon name="server-edit-line" />
  <Icon name="server-error-line" />
  <Icon name="server-check-line" />
  <Icon name="server-warning-line" />

  <Icon name="server-lock-line" />
  <Icon name="server-setting-line" />
  <Icon name="server-refresh-line" />
  <Icon name="server-star-line" />

  <Icon name="cloud-line" />
  <Icon name="cloud-disable-line" />
  <Icon name="cloud-download-line" />
  <Icon name="cloud-upload-line" />

  <Icon name="cloud-add-line" />
  <Icon name="cloud-subtract-line" />
  <Icon name="cloud-check-line" />
  <Icon name="cloud-warning-line" />

  <Icon name="cloud-error-line" />
  <Icon name="cloud-refresh-line" />
  <Icon name="cloud-star-line" />
  <Icon name="cloud-transfer-line" />

  <Icon name="computer-chip-line" />
  <Icon name="computer-chip-2-core-line" />
  <Icon name="globe-1-line" />
  <Icon name="globe-2-line" />

  <Icon name="filter-line" />
  <Icon name="layers-line" />
  <Icon name="layers-hide-line" />
  <Icon name="download-line" />

  <Icon name="upload-line" />
  <Icon name="new-window-line" />
  <Icon name="nav-drawer-line" />
  <Icon name="nav-show-more-line" />

  <Icon name="file-zip-line" />
  <Icon name="file-rar-line" />
  <Icon name="file-csv-line" />
  <Icon name="file-exe-line" />

  <Icon name="file-py-line" />
  <Icon name="file-sql-line" />
  <Icon name="file-xml-line" />
  <Icon name="file-apk-line" />

  <Icon name="file-app-line" />
  <Icon name="file-bmp-line" />
  <Icon name="file-eps-line" />
  <Icon name="file-gif-line" />

  <Icon name="file-jpg-line" />
  <Icon name="file-png-line" />
  <Icon name="file-tiff-line" />
  <Icon name="file-avi-line" />

  <Icon name="file-mov-line" />
  <Icon name="file-mp4-line" />
  <Icon name="file-mpg-line" />
  <Icon name="file-qt-line" />

  <Icon name="file-aac-line" />
  <Icon name="file-aif-line" />
  <Icon name="file-midi-line" />
  <Icon name="file-mp3-line" />

  <Icon name="file-wav-line" />
  <Icon name="file-xls-line" />
  <Icon name="file-txt-line" />
  <Icon name="file-pdf-line" />

  <Icon name="file-ppt-line" />
  <Icon name="file-rtf-line" />
  <Icon name="file-doc-line" />
  <Icon name="file-zipped-line" />

  <Icon name="file-code-line" />
  <Icon name="file-database-line" />
  <Icon name="file-video-line" />
  <Icon name="file-picture-line" />

  <Icon name="file-audio-line" />
  <Icon name="file-table-line" />
  <Icon name="file-graph-pie-line" />
  <Icon name="file-text-document-line" />

  <Icon name="sign-stop-line" />
  <Icon name="view-column-line" />
  <Icon name="view-headline-line" />
  <Icon name="view-list-line" />

  <Icon name="view-module-line" />
  <Icon name="bookmark-line" />
  <Icon name="bookmark-add-line" />
  <Icon name="bookmark-subtract-line" />
</div>
`.trim()

const fillCode = `
<div className='iconTable' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: '5px 5px' }}>
  <Icon name="arrow-up-fill" />
  <Icon name="arrow-right-fill" />
  <Icon name="arrow-left-fill" />
  <Icon name="arrow-down-fill" />

  <Icon name="arrow-double-up-fill" />
  <Icon name="arrow-double-right-fill" />
  <Icon name="arrow-double-left-fill" />
  <Icon name="arrow-double-down-fill" />

  <Icon name="close-fill" />
  <Icon name="add-fill" />
  <Icon name="subtract-fill" />
  <Icon name="check-fill" />

  <Icon name="help-circle-fill" />
  <Icon name="add-circle-fill" />
  <Icon name="subtract-circle-fill" />
  <Icon name="check-circle-2-fill" />

  <Icon name="infomation-circle-fill" />
  <Icon name="check-circle-1-fill" />
  <Icon name="warning-triangle-fill" />
  <Icon name="account-circle-fill" />

  <Icon name="account-group-fill" />
  <Icon name="alarm-fill" />
  <Icon name="clock-fill" />
  <Icon name="stopwatch-fill" />

  <Icon name="clock-fill" />
  <Icon name="stopwatch-fill" />
  <Icon name="calendar-fill" />
  <Icon name="checklist-fill" />

  <Icon name="check-fill" />
  <Icon name="search-fill" />
  <Icon name="zoom-in-fill" />
  <Icon name="zoom-out-fill" />

  <Icon name="cog-fill" />
  <Icon name="view-fill" />
  <Icon name="hide-fill" />
  <Icon name="settings-fill" />

  <Icon name="copy-1-fill" />
  <Icon name="copy-2-fill" />
  <Icon name="edit-circle-fill" />
  <Icon name="lock-close-fill" />

  <Icon name="edit-circle-fill" />
  <Icon name="bin-fill" />
  <Icon name="binoculars-fill" />
  <Icon name="sync-fill" />
  
  <Icon name="revert-fill" />
  <Icon name="history-fill" />
  <Icon name="sync-warning-fill" />
  <Icon name="star-fill" />

  <Icon name="star-circle-fill" />
  <Icon name="folder-fill" />
  <Icon name="folder-add-fill" />
  <Icon name="folder-edit-fill" />

  <Icon name="folder-check-fill" />
  <Icon name="folder-warning-fill" />
  <Icon name="folder-lock-fill" />
  <Icon name="folder-star-fill" />

  <Icon name="file-fill" />
  <Icon name="file-add-fill" />
  <Icon name="file-subtract-fill" />
  <Icon name="file-edit-fill" />

  <Icon name="file-check-fill" />
  <Icon name="file-warning-fill" />
  <Icon name="file-error-fill" />
  <Icon name="file-lock-fill" />

  <Icon name="file-star-fill" />
  <Icon name="server-fill" />
  <Icon name="server-add-fill" />
  <Icon name="server-subtract-fill" />

  <Icon name="server-edit-fill" />
  <Icon name="server-error-fill" />
  <Icon name="server-check-fill" />
  <Icon name="server-warning-fill" />

  <Icon name="server-lock-fill" />
  <Icon name="server-setting-fill" />
  <Icon name="server-refresh-fill" />
  <Icon name="server-star-fill" />

  <Icon name="cloud-fill" />
  <Icon name="cloud-disable-fill" />
  <Icon name="cloud-download-fill" />
  <Icon name="cloud-upload-fill" />

  <Icon name="cloud-add-fill" />
  <Icon name="cloud-subtract-fill" />
  <Icon name="cloud-check-fill" />
  <Icon name="cloud-warning-fill" />

  <Icon name="cloud-error-fill" />
  <Icon name="cloud-refresh-fill" />
  <Icon name="cloud-star-fill" />
  <Icon name="cloud-transfer-fill" />

  <Icon name="upload-fill" />
  <Icon name="new-window-fill" />
  <Icon name="nav-drawer-fill" />
  <Icon name="nav-show-more-fill" />

  <Icon name="file-zip-fill" />
  <Icon name="file-rar-fill" />
  <Icon name="file-csv-fill" />
  <Icon name="file-exe-fill" />

  <Icon name="file-py-fill" />
  <Icon name="file-sql-fill" />
  <Icon name="file-xml-fill" />
  <Icon name="file-apk-fill" />

  <Icon name="file-app-fill" />
  <Icon name="file-bmp-fill" />
  <Icon name="file-eps-fill" />
  <Icon name="file-gif-fill" />

  <Icon name="file-jpg-fill" />
  <Icon name="file-png-fill" />
  <Icon name="file-tiff-fill" />
  <Icon name="file-avi-fill" />

  <Icon name="file-mov-fill" />
  <Icon name="file-mp4-fill" />
  <Icon name="file-mpg-fill" />
  <Icon name="file-qt-fill" />

  <Icon name="file-aac-fill" />
  <Icon name="file-aif-fill" />
  <Icon name="file-midi-fill" />
  <Icon name="file-mp3-fill" />

  <Icon name="file-wav-fill" />
  <Icon name="file-xls-fill" />
  <Icon name="file-txt-fill" />
  <Icon name="file-pdf-fill" />

  <Icon name="file-ppt-fill" />
  <Icon name="file-rtf-fill" />
  <Icon name="file-doc-fill" />
  <Icon name="file-zipped-fill" />

  <Icon name="file-code-fill" />
  <Icon name="file-database-fill" />
  <Icon name="file-video-fill" />
  <Icon name="file-picture-fill" />

  <Icon name="file-audio-fill" />
  <Icon name="file-table-fill" />
  <Icon name="file-graph-pie-fill" />
  <Icon name="file-text-document-fill" />

  <Icon name="sign-stop-fill" />
  <Icon name="view-column-fill" />
  <Icon name="view-headline-fill" />
  <Icon name="view-list-fill" />

  <Icon name="view-module-fill" />
  <Icon name="bookmark-fill" />
  <Icon name="bookmark-add-fill" />
  <Icon name="bookmark-subtract-fill" />
</div>
`.trim()

export const IconPage = () => (
  <div className='pageContainer'>
    <div className='title'>Icons</div>
    <div className='subTitle'>Brand Icons</div>
    <Description description={description} />
    <LiveProvider code={code} scope={{ Icon, Tooltip }} theme={theme}>
      <LiveEditor />
      <LiveError />
      <LivePreview className={'displayArea'} />
    </LiveProvider>
    <div className='subTitle'>Line Icon Table</div>
    <LiveProvider code={lineCode} scope={{ Icon, Tooltip }} theme={theme}>
      <LiveEditor />
      <LiveError />
      <LivePreview className={'displayArea'} />
    </LiveProvider>
    <div className='subTitle'>Fill Icon Table</div>
    <LiveProvider code={fillCode} scope={{ Icon }} theme={theme}>
      <LiveEditor />
      <LiveError />
      <LivePreview className={'displayArea'} />
    </LiveProvider>
    <div className='subTitle'>Custom Icons</div>
    <Description description={secondDescription} />
    <PropsTable attributes={attributes} />
  </div>
)
