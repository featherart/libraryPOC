export const description = 'Modals contain a dialogue with action buttons that allow users to confirm or cancel. The default styling is green, with a danger modal styled in red. The default button wording can be overridden with custom messaging.'

export const attributes = [
  {
    name: 'Title',
    default: '',
    type: 'String',
    description: 'Modal Title' 
  },
  {
    name: 'content',
    default: '',
    type: 'Object',
    description: 'Content that goes in body of modal.' 
  },
  {
    name: 'OpenMessage',
    default: 'Open',
    type: 'String',
    description: 'Message on the button that opens the modal.' 
  },
  {
    name: 'onConfirm',
    default: '',
    type: 'function',
    description: 'Function that gets called when confirm button pressed.' 
  }
]
