export const description = `
Brand Buttons feature a Brand Green color scheme and are the preferred style for Primary, Default and Flat button types.
Neutral Buttons feature a Dark Gray color scheme and are available to use as an alternative to the preferred style.
Disabled Buttons are Light Gray and used when the user cannot proceed until an input is collected.
Danger Buttons are Accent Red and have a different visual style to inform users of potential dangerous actions they are about to take. If using the Danger button as a standalone, we recommend styling it as a Default button. If using a Danger button within a Button Group or Confirmation Set, the Danger button would be styled as a Primary button.
`

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
