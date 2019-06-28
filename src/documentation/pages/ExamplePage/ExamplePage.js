import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { theme } from '../theme'

const example = `
function Likes() {
  const [likes, increaseLikes] = React.useState(0)
  return (
    <center>
      <strong>❤️ {likes} likes</strong>
      <hr/>
      <button onClick={() => increaseLikes(likes + 1)}>Like</button>
    </center>
  )
}
`.trim()

export const ExamplePage = () => {
  return (
    <div>
      React Live Example
      <LiveProvider code={example} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  )
}
