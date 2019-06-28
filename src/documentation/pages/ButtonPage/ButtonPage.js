import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Button } from '../../../components'
import { theme } from '../theme'

const example = `
render(
  <Button />
)
`.trim()

export const ButtonPage = () => {
  return (
    <div>
      React Live Example
      <LiveProvider code={example} scope={{Button}} theme={theme} noInline>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  )
}
