export const description = 'Gives visual feedback on the status of a process. It accepts an Array of values that indicate current status, and a total that indicates the number of units needed to complete the process. There are also a few different options for color to customize its look, including a few semantic color options that can be passed in as boolean options. The default is, of course, green.'

export const attributes = [
  {
    name: 'progress',
    default: '',
    type: '[number]',
    description: 'The current value(s) of the progress bar. Can either be a single number or an array of numbers, but either way it must be wrapped in an Array.' 
  },
  {
    name: 'total',
    default: '100',
    type: 'number',
    description: 'The total units of the progress bar.' 
  },
  {
    name: 'color',
    default: 'green',
    type: 'enum: teal, blue, orange, red, purple',
    description: 'The color name to use. Override `green` by passing in one of the other listed colors.' 
  },
  {
    name: 'className',
    default: '',
    type: 'String',
    description: 'Custom CSS class name to apply to the component.' 
  },
  {
    name: 'inline',
    default: '',
    type: 'boolean',
    description: 'Aligns child progress components in an inline fashion. For Progress Group only.' 
  }
]
