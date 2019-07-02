export const description = `
Alerts pop up like a finished piece of toast to let a user know the outcome of an action.
`

export const attributes = [
  {
    name: 'default',
    default: 'true',
    type: 'boolean',
    description: 'Decorates a default, primary, or flat button to denote a neutral or less important action.' 
  },
  {
    name: 'primary',
    default: 'false',
    type: 'boolean',
    description: 'Decorates other button types with styling that denotes an important action.' 
  },
  {
    name: 'flat',
    default: 'false',
    type: 'boolean',
    description: 'Decorates other button types with styling that denotes an auxiliary action.' 
  },
  {
    name: 'neutral',
    default: 'false',
    type: 'boolean',
    description: 'Decorates other button types with styling that denotes a less important action.' 
  },
  {
    name: 'danger',
    default: 'false',
    type: 'boolean',
    description: 'Decorates other button types with styling that denotes a dangerous action.' 
  },
  {
    name: 'disabled',
    default: 'false',
    type: 'boolean',
    description: 'Decorates other button types with styling that denotes an action that is not possible.' 
  }
]
