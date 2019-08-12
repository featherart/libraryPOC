export const description = 'Options are inputs that allow a user to quickly select from one or more choices.'

export const checkDescription = 'Checkboxes allow users to select one or more options from a defined, displayed list of choices. Checkboxes can also be used to toggle a single option or preference.'

export const radioDescription = 'Radios allow users to select only one option from a few defined, displayed list of choices.'

export const toggleDescription = 'allow users to switch between two states (like on and off), and the changes should take effect instantaneoustly.'

export const attributes = [
  {
    name: 'name',
    default: '',
    type: 'string',
    description: 'The name of the component.' 
  },
  {
    name: 'onChange',
    default: '',
    type: 'function',
    description: 'Optional: OptionGroup callback that gets called on checked value changes. Returns synthetic change event.' 
  },
  {
    name: 'inline',
    default: 'false',
    type: 'boolean',
    description: 'Renders option group in a horizontal row.' 
  },
  {
    name: 'className',
    default: '',
    type: 'String',
    description: 'Custom CSS class name to apply to the component.' 
  }
]
