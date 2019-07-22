import React from 'react'
import { PropsTable } from '../PropsTable'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'
import { Icon, Tooltip } from '../../../components'
import { attributes, description, secondDescription } from './config'
import { Description } from '../Description'
import '../pageStyles.less'

const code = `
  <Icon large name='science-lightbulb-fill' />
`.trim()

const lineCode = `
<div className='iconTable' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
  <Tooltip dark position='bottom' message='arrow-up-line'>
    <Icon name='arrow-up-line' />
  </Tooltip>
  <Tooltip dark position='bottom' message='arrow-right-line'>
    <Icon name='arrow-right-line' />
  </Tooltip>
  <Tooltip dark position='bottom' message='arrow-left-line'>
    <Icon name='arrow-left-line' />
  </Tooltip>
  <Tooltip dark position='bottom' message='arrow-down-line'>
    <Icon name='arrow-down-line' />
  </Tooltip>

  <Icon name='arrow-double-up-line' />
  <Icon name='arrow-double-right-line' />
  <Icon name='arrow-double-left-line' />
  <Icon name='arrow-double-down-line' />

  <Icon name='close-line' />
  <Icon name='add-line' />
  <Icon name='subtract-line' />
  <Icon name='check-line' />

  <Icon name='help-circle-line' />
  <Icon name='add-circle-line' />
  <Icon name='subtract-circle-line' />
  <Icon name='check-circle-2-line' />

  <Icon name='infomation-circle-line' />
  <Icon name='check-circle-1-line' />
  <Icon name='warning-triangle-line' />
  <Icon name='account-circle-line' />

  <Icon name='account-group-line' />
  <Icon name='alarm-line' />
  <Icon name='clock-line' />
  <Icon name='stopwatch-line' />

  <Icon name='clock-line' />
  <Icon name='stopwatch-line' />
  <Icon name='calendar-line' />
  <Icon name='checklist-line' />

  <Icon name='check-line' />
  <Icon name='search-line' />
  <Icon name='zoom-in-line' />
  <Icon name='zoom-out-line' />

  <Icon name='cog-line' />
  <Icon name='view-line' />
  <Icon name='hide-line' />
  <Icon name='settings-line' />

  <Icon name='copy-1-line' />
  <Icon name='copy-2-line' />
  <Icon name='lock-open-line' />
  <Icon name='lock-close-line' />

  <Icon name='edit-circle-line' />
  <Icon name='bin-line' />
  <Icon name='binoculars-line' />
  <Icon name='sync-line' />

  <Icon name='revert-line' />
  <Icon name='history-line' />
  <Icon name='sync-warning-line' />
  <Icon name='star-line' />

  <Icon name='star-circle-line' />
  <Icon name='folder-line' />
  <Icon name='folder-add-line' />
  <Icon name='folder-edit-line' />

  <Icon name='folder-check-line' />
  <Icon name='folder-warning-line' />
  <Icon name='folder-lock-line' />
  <Icon name='folder-star-line' />

  <Icon name='file-line' />
  <Icon name='file-add-line' />
  <Icon name='file-subtract-line' />
  <Icon name='file-edit-line' />

  <Icon name='file-check-line' />
  <Icon name='file-warning-line' />
  <Icon name='file-error-line' />
  <Icon name='file-lock-line' />

  <Icon name='file-star-line' />
  <Icon name='server-line' />
  <Icon name='server-add-line' />
  <Icon name='server-subtract-line' />

  <Icon name='server-edit-line' />
  <Icon name='server-error-line' />
  <Icon name='server-check-line' />
  <Icon name='server-warning-line' />

  <Icon name='server-lock-line' />
  <Icon name='server-setting-line' />
  <Icon name='server-refresh-line' />
  <Icon name='server-star-line' />

  <Icon name='cloud-line' />
  <Icon name='cloud-disable-line' />
  <Icon name='cloud-download-line' />
  <Icon name='cloud-upload-line' />

  <Icon name='cloud-add-line' />
  <Icon name='cloud-subtract-line' />
  <Icon name='cloud-check-line' />
  <Icon name='cloud-warning-line' />

  <Icon name='cloud-error-line' />
  <Icon name='cloud-refresh-line' />
  <Icon name='cloud-star-line' />
  <Icon name='cloud-transfer-line' />

  <Icon name='computer-chip-line' />
  <Icon name='computer-chip-2-core-line' />
  <Icon name='globe-1-line' />
  <Icon name='globe-2-line' />

  <Icon name='filter-line' />
  <Icon name='layers-line' />
  <Icon name='layers-hide-line' />
  <Icon name='download-line' />

  <Icon name='upload-line' />
  <Icon name='new-window-line' />
  <Icon name='nav-drawer-line' />
  <Icon name='nav-show-more-line' />

  <Icon name='file-zip-line' />
  <Icon name='file-rar-line' />
  <Icon name='file-csv-line' />
  <Icon name='file-exe-line' />

  <Icon name='file-py-line' />
  <Icon name='file-sql-line' />
  <Icon name='file-xml-line' />
  <Icon name='file-apk-line' />

  <Icon name='file-app-line' />
  <Icon name='file-bmp-line' />
  <Icon name='file-eps-line' />
  <Icon name='file-gif-line' />

  <Icon name='file-jpg-line' />
  <Icon name='file-png-line' />
  <Icon name='file-tiff-line' />
  <Icon name='file-avi-line' />

  <Icon name='file-mov-line' />
  <Icon name='file-mp4-line' />
  <Icon name='file-mpg-line' />
  <Icon name='file-qt-line' />

  <Icon name='file-aac-line' />
  <Icon name='file-aif-line' />
  <Icon name='file-midi-line' />
  <Icon name='file-mp3-line' />

  <Icon name='file-wav-line' />
  <Icon name='file-xls-line' />
  <Icon name='file-txt-line' />
  <Icon name='file-pdf-line' />

  <Icon name='file-ppt-line' />
  <Icon name='file-rtf-line' />
  <Icon name='file-doc-line' />
  <Icon name='file-zipped-line' />

  <Icon name='file-code-line' />
  <Icon name='file-database-line' />
  <Icon name='file-video-line' />
  <Icon name='file-picture-line' />

  <Icon name='file-audio-line' />
  <Icon name='file-table-line' />
  <Icon name='file-graph-pie-line' />
  <Icon name='file-text-document-line' />

  <Icon name='file-question-line' />
  <Icon name='view-column-line' />
  <Icon name='view-headline-line' />
  <Icon name='view-list-line' />

  <Icon name='bookmark-line' />
  <Icon name='bookmark-add-line' />
  <Icon name='bookmark-subtract-line' />
  <Icon name='bookmark-edit-line' />

  <Icon name='view-module-line' />
  <Icon name='sign-stop-line' />
  <Icon name='nav-show-more-h-line' />
  <Icon name='speed-gauge-line' />

  <Icon name='science-lightbulb-line' />
  <Icon name='ngc-cloud' />
  <Icon name='ngc-dataset' />
  <Icon name='ngc-server' />

  <Icon name='ngc-framework' />
  <Icon name='ngc-pc' />
  <Icon name='ngc-resources' />
  <Icon name='ngc-summary' />

  <Icon name='ngc-workstation' />
  <Icon name='ngc-container' />
  <Icon name='email-line' />
  <Icon name='link-line' />

  <Icon name='at-sign-line' />
  <Icon name='box-line' />
  <Icon name='boxes-line' />
  <Icon name='shopping-bag-media-line' />

  <Icon name='hierarchy-line' />
  <Icon name='network-line' />
  <Icon name='graph-line' />
  <Icon name='flow-chart-line' />

  <Icon name='home-line' />
  <Icon name='credit-card-line' />
  <Icon name='module-line' />
  <Icon name='modules-line' />

  <Icon name='previous-button-line' />
  <Icon name='rewind-button-line' />
  <Icon name='stop-button-line' />
  <Icon name='play-button-line' />

  <Icon name='pause-button-line' />
  <Icon name='next-button-line' />
  <Icon name='eject-button-line' />
  <Icon name='share-line' />

  <Icon name='account-user-line' />
  <Icon name='crosshair-1-line' />
  <Icon name='crosshair-2-line' />
  <Icon name='cursor-1-line' />

  <Icon name='cursor-2-line' />
  <Icon name='cursor-double-line' />
  <Icon name='cursor-add-line' />
  <Icon name='cursor-move-line' />

  <Icon name='cursor-select-area-line' />
  <Icon name='cursor-move-3-line' />
  <Icon name='cursor-move-1-line' />
  <Icon name='cursor-move-left-right-1-line' />

  <Icon name='cursor-move-up-down-1-line' />
  <Icon name='cursor-move-left-right-2-line' />
  <Icon name='cursor-move-up-down-2-line' />
  <Icon name='direction-button-line' />

  <Icon name='direction-button-2-line' />
  <Icon name='direction-button-1-line' />
  <Icon name='frame-line' />
  <Icon name='frame-1-line' />

  <Icon name='frame-2-line' />
  <Icon name='cursor-move-up-line' />
  <Icon name='cursor-down-line' />
  <Icon name='cursor-move-right-line' />

  <Icon name='cursor-move-up-line' />
  <Icon name='cursor-move-2-line' />
  <Icon name='cursor-move-up-down-2-line' />
  <Icon name='cursor-move-left-right-2-line' />
  
  <Icon name='cursor-move-up-down-2-line' />
  <Icon name='direction-button-line' />
  <Icon name='direction-button-2-line' />
  <Icon name='direction-button-1-line' />

  <Icon name='logo-facebook-line' />
  <Icon name='logo-google-line' />
  <Icon name='logo-instagram-line' />
  <Icon name='logo-linkedin-line' />

  <Icon name='logo-twitter-bird-line' />
  <Icon name='account-code-line' />
  <Icon name='logo-instagram-line' />
  <Icon name='vision-line' />

  <Icon name='transfer-arrows-line' />
  <Icon name='transfer-circle-line' />
  <Icon name='book-open-line' />
  <Icon name='book-open-1-line' />

  <Icon name='bubble-chat-line' />
  <Icon name='chat-double-bubble-line' />
  <Icon name='db-line' />
  <Icon name='db-add-line' />

  <Icon name='db-check-line' />
  <Icon name='db-edit-line' />
  <Icon name='db-star-line' />
  <Icon name='db-lock-line' />

  <Icon name='db-refresh-line' />
  <Icon name='db-remove-line' />
  <Icon name='db-setting-line' />
  <Icon name='db-subtract-line' />

  <Icon name='db-warning-line' />
  <Icon name='clipboard-line' />
  <Icon name='clipboard-add-line' />
  <Icon name='clipboard-check-line' />

  <Icon name='clipboard-edit-line' />
  <Icon name='clipboard-subtract-line' />
  <Icon name='catalog-high-performance-computing' />
  <Icon name='catalog-inference' />

  <Icon name='catalog-infrastructure' />
  <Icon name='catalog-deep-learning' />
  <Icon name='catalog-machine-learning' />
  <Icon name='catalog-visualization' />

  <Icon name='catalog-medical-imaging' />
  <Icon name='catalog-smart-cities' />
</div>
`.trim()

const fillCode = `
<div className='iconTable' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
  <Icon name='arrow-up-fill' />
  <Icon name='arrow-right-fill' />
  <Icon name='arrow-left-fill' />
  <Icon name='arrow-down-fill' />

  <Icon name='arrow-double-up-fill' />
  <Icon name='arrow-double-right-fill' />
  <Icon name='arrow-double-left-fill' />
  <Icon name='arrow-double-down-fill' />

  <Icon name='close-fill' />
  <Icon name='add-fill' />
  <Icon name='subtract-fill' />
  <Icon name='check-fill' />

  <Icon name='help-circle-fill' />
  <Icon name='add-circle-fill' />
  <Icon name='subtract-circle-fill' />
  <Icon name='check-circle-2-fill' />

  <Icon name='infomation-circle-fill' />
  <Icon name='check-circle-1-fill' />
  <Icon name='warning-triangle-fill' />
  <Icon name='account-circle-fill' />

  <Icon name='account-group-fill' />
  <Icon name='alarm-fill' />
  <Icon name='clock-fill' />
  <Icon name='stopwatch-fill' />

  <Icon name='clock-fill' />
  <Icon name='stopwatch-fill' />
  <Icon name='calendar-fill' />
  <Icon name='checklist-fill' />

  <Icon name='check-fill' />
  <Icon name='search-fill' />
  <Icon name='zoom-in-fill' />
  <Icon name='zoom-out-fill' />

  <Icon name='cog-fill' />
  <Icon name='view-fill' />
  <Icon name='hide-fill' />
  <Icon name='settings-fill' />

  <Icon name='copy-1-fill' />
  <Icon name='copy-2-fill' />
  <Icon name='edit-circle-fill' />
  <Icon name='lock-close-fill' />

  <Icon name='edit-circle-fill' />
  <Icon name='bin-fill' />
  <Icon name='binoculars-fill' />
  <Icon name='sync-fill' />
  
  <Icon name='revert-fill' />
  <Icon name='history-fill' />
  <Icon name='sync-warning-fill' />
  <Icon name='star-fill' />

  <Icon name='star-circle-fill' />
  <Icon name='folder-fill' />
  <Icon name='folder-add-fill' />
  <Icon name='folder-edit-fill' />

  <Icon name='folder-check-fill' />
  <Icon name='folder-warning-fill' />
  <Icon name='folder-lock-fill' />
  <Icon name='folder-star-fill' />

  <Icon name='file-fill' />
  <Icon name='file-add-fill' />
  <Icon name='file-subtract-fill' />
  <Icon name='file-edit-fill' />

  <Icon name='file-check-fill' />
  <Icon name='file-warning-fill' />
  <Icon name='file-error-fill' />
  <Icon name='file-lock-fill' />

  <Icon name='file-star-fill' />
  <Icon name='server-fill' />
  <Icon name='server-add-fill' />
  <Icon name='server-subtract-fill' />

  <Icon name='server-edit-fill' />
  <Icon name='server-error-fill' />
  <Icon name='server-check-fill' />
  <Icon name='server-warning-fill' />

  <Icon name='server-lock-fill' />
  <Icon name='server-setting-fill' />
  <Icon name='server-refresh-fill' />
  <Icon name='server-star-fill' />

  <Icon name='cloud-fill' />
  <Icon name='cloud-disable-fill' />
  <Icon name='cloud-download-fill' />
  <Icon name='cloud-upload-fill' />

  <Icon name='cloud-add-fill' />
  <Icon name='cloud-subtract-fill' />
  <Icon name='cloud-check-fill' />
  <Icon name='cloud-warning-fill' />

  <Icon name='cloud-error-fill' />
  <Icon name='cloud-refresh-fill' />
  <Icon name='cloud-star-fill' />
  <Icon name='cloud-transfer-fill' />

  <Icon name='upload-fill' />
  <Icon name='new-window-fill' />
  <Icon name='nav-drawer-fill' />
  <Icon name='nav-show-more-fill' />

  <Icon name='file-zip-fill' />
  <Icon name='file-rar-fill' />
  <Icon name='file-csv-fill' />
  <Icon name='file-exe-fill' />

  <Icon name='file-py-fill' />
  <Icon name='file-sql-fill' />
  <Icon name='file-xml-fill' />
  <Icon name='file-apk-fill' />

  <Icon name='file-app-fill' />
  <Icon name='file-bmp-fill' />
  <Icon name='file-eps-fill' />
  <Icon name='file-gif-fill' />

  <Icon name='file-jpg-fill' />
  <Icon name='file-png-fill' />
  <Icon name='file-tiff-fill' />
  <Icon name='file-avi-fill' />

  <Icon name='file-mov-fill' />
  <Icon name='file-mp4-fill' />
  <Icon name='file-mpg-fill' />
  <Icon name='file-qt-fill' />

  <Icon name='file-aac-fill' />
  <Icon name='file-aif-fill' />
  <Icon name='file-midi-fill' />
  <Icon name='file-mp3-fill' />

  <Icon name='file-wav-fill' />
  <Icon name='file-xls-fill' />
  <Icon name='file-txt-fill' />
  <Icon name='file-pdf-fill' />

  <Icon name='file-ppt-fill' />
  <Icon name='file-rtf-fill' />
  <Icon name='file-doc-fill' />
  <Icon name='file-zipped-fill' />

  <Icon name='file-code-fill' />
  <Icon name='file-database-fill' />
  <Icon name='file-video-fill' />
  <Icon name='file-picture-fill' />

  <Icon name='file-audio-fill' />
  <Icon name='file-table-fill' />
  <Icon name='file-graph-pie-fill' />
  <Icon name='file-text-document-fill' />

  <Icon name='sign-stop-fill' />
  <Icon name='view-column-fill' />
  <Icon name='view-headline-fill' />
  <Icon name='view-list-fill' />

  <Icon name='bookmark-fill' />
  <Icon name='bookmark-add-fill' />
  <Icon name='bookmark-subtract-fill' />
  <Icon name='bookmark-edit-fill' />

  <Icon name='view-module-fill' />
  <Icon name='nav-show-more-h-fill' />
  <Icon name='speed-gauge-fill' />
  <Icon name='science-lightbulb-fill' />

  <Icon name='ngc-dataset-fill' />
  <Icon name='ngc-server-fill' />
  <Icon name='ngc-framework-fill' />
  <Icon name='ngc-pc-fill' />

  <Icon name='ngc-resources-fill' />
  <Icon name='ngc-summary-fill' />
  <Icon name='ngc-workstation-fill' />
  <Icon name='ngc-container-fill' />

  <Icon name='at-sign-fill' />
  <Icon name='box-fill' />
  <Icon name='boxes-fill' />
  <Icon name='shopping-bag-media-fill' />

  <Icon name='hierarchy-fill' />
  <Icon name='network-fill' />
  <Icon name='graph-fill' />
  <Icon name='flow-chart-fill' />

  <Icon name='home-fill' />
  <Icon name='credit-card-fill' />
  <Icon name='module-fill' />
  <Icon name='modules-fill' />

  <Icon name='previous-button-fill' />
  <Icon name='rewind-button-fill' />
  <Icon name='stop-button-fill' />
  <Icon name='play-button-fill' />

  <Icon name='pause-button-fill' />
  <Icon name='next-button-fill' />
  <Icon name='eject-button-fill' />
  <Icon name='share-fill' />

  <Icon name='account-user-fill' />
  <Icon name='crosshair-1-fill' />
  <Icon name='crosshair-2-fill' />
  <Icon name='cursor-1-fill' />

  <Icon name='cursor-2-fill' />
  <Icon name='cursor-double-fill' />
  <Icon name='cursor-add-fill' />
  <Icon name='cursor-move-fill' />

  <Icon name='cursor-select-area-fill' />
  <Icon name='cursor-move-3-fill' />
  <Icon name='cursor-move-1-fill' />
  <Icon name='cursor-move-left-right-1-fill' />

  <Icon name='cursor-move-up-down-fill' />
  <Icon name='cursor-move-left-right-2-fill' />
  <Icon name='cursor-move-up-down-2-fill' />
  <Icon name='direction-button-fill' />

  <Icon name='direction-button-2-fill' />
  <Icon name='direction-button-1-fill' />
  <Icon name='frame-fill' />
  <Icon name='frame-1-fill' />

  <Icon name='frame-2-fill' />
  <Icon name='cursor-move-up-fill' />
  <Icon name='cursor-down-fill' />
  <Icon name='cursor-move-right-fill' />

  <Icon name='cursor-move-up-fill' />
  <Icon name='cursor-move-2-fill' />
  <Icon name='cursor-move-up-down-2-fill' />
  <Icon name='cursor-move-left-right-2-fill' />
  
  <Icon name='cursor-move-up-down-2-fill' />
  <Icon name='direction-button-fill' />
  <Icon name='direction-button-2-fill' />
  <Icon name='direction-button-1-fill' />

  <Icon name='logo-facebook-fill' />
  <Icon name='logo-google-fill' />
  <Icon name='logo-instagram-fill' />
  <Icon name='logo-linkedin-fill' />

  <Icon name='logo-twitter-bird-fill' />
  <Icon name='account-code-fill' />
  <Icon name='logo-instagram-fill' />
  <Icon name='vision-fill' />

  <Icon name='transfer-arrows-fill' />
  <Icon name='transfer-circle-fill' />
  <Icon name='book-open-fill' />
  <Icon name='book-open-1-fill' />

  <Icon name='bubble-chat-fill' />
  <Icon name='chat-double-bubble-fill' />
  <Icon name='db-fill' />
  <Icon name='db-add-fill' />

  <Icon name='db-check-fill' />
  <Icon name='db-edit-fill' />
  <Icon name='db-star-fill' />
  <Icon name='db-lock-fill' />

  <Icon name='db-refresh-fill' />
  <Icon name='db-remove-fill' />
  <Icon name='db-setting-fill' />
  <Icon name='db-subtract-fill' />

  <Icon name='db-warning-fill' />
  <Icon name='clipboard-fill' />
  <Icon name='clipboard-add-fill' />
  <Icon name='clipboard-check-fill' />

  <Icon name='clipboard-edit-fill' />
  <Icon name='clipboard-subtract-fill' />
  <Icon name='email-fill' />
  <Icon name='link-fill' />
</div>
`.trim()

export const IconPage = () => {
  return (
    <div className='pageContainer'>
      <div className='title'>Icons</div>
      <div className='subTitle'>Brand Icons</div>
      <Description description={description} />
      <LiveProvider code={code} scope={{ Icon, Tooltip }} theme={theme}>
        <LivePreview className={'displayArea'} />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
      <div className='subTitle'>Line Icon Table</div>
      <LiveProvider code={lineCode} scope={{ Icon, Tooltip }} theme={theme}>
        <LivePreview className={'displayArea'} />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
      <div className='subTitle'>Fill Icon Table</div>
      <LiveProvider code={fillCode} scope={{ Icon }} theme={theme}>
        <LivePreview className={'displayArea'} />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
      <div className='subTitle'>Custom Icons</div>
      <Description description={secondDescription} />
      <PropsTable attributes={attributes} />
    </div>
  )
}
