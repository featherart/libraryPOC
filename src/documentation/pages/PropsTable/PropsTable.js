import React from 'react'
import './propsTable.less'

export const PropsTable = ({ attributes }) => (
  <table className={'documentation propsTable'}>
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
