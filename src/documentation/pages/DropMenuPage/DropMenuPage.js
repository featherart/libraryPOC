import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { DropMenu } from '../../../components/DropMenu'
import { theme } from '../theme'
import { attributes, description } from './config'
import style from '../pageStyles.less'

const Description = ({ description }) => (
  <p className={style.description}>{description}</p>
)

const PropsTable = ({ attributes }) => (
  <table className={style.propsTable}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {attributes &&
        attributes.map((attr, i) => (
          <tr key={i}>
            <td>{attr.name}</td>
            <td>{attr.default}</td>
            <td>{attr.type}</td>
            <td>{attr.description}</td>
          </tr>
        ))}
    </tbody>
  </table>
)

const code = `
  <DropMenu
    actions={
      [
        { icon: 'bin-line', action: 'Delete Item', danger: true, onClick: () => console.log('deleted') },
        { icon: 'star-line', action: 'Favorite Item'},
        { icon: 'sync-line', action: 'Forbidden Item', disabled: true, onClick: () => console.log('nope')}
      ]
    }
  />
`.trim()

export const DropMenuPage = () => {
  return (
    <div className={style.pageContainer}>
      <div className={style.title}>DropMenu</div>
      <Description description={description} />
      <div>
        <LiveProvider code={code} theme={theme} scope={{ DropMenu }}>
          <LiveEditor />
          <LiveError />
          <LivePreview className={style.displayArea} />
        </LiveProvider>
      </div>
      <PropsTable attributes={attributes} />
    </div>
  )
}
