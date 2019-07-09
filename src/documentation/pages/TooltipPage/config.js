export const description = 'Small feedback elements that can be triggered on click, focus or hover. The default is click. Tooltips can appear in any of the 4 directions around their parent element - top, bottom, left or right. They can be styled with the semantic props critical, information, success or warning.'

export const attributes = [
  {
    name: 'header',
    default: '',
    type: 'String',
    description: 'Title header in body of tooltip.' 
  },
  {
    name: 'message',
    default: '',
    type: 'String',
    description: 'Main message in body of tooltip.' 
  },
  {
    name: 'children',
    default: '',
    type: 'Object',
    description: 'Primary content.' 
  },
  {
    name: 'placement',
    default: 'top',
    type: 'String',
    description: 'Where tooltip appears over child element.' 
  },
  {
    name: 'success',
    default: 'false',
    type: 'boolean',
    description: 'For an action that can be completed successfully.' 
  }
]
