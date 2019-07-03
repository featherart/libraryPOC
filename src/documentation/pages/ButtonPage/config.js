export const description = `
Brand compliant buttons that can be primary, flat, neutral or disabled by passing in these props.`

export const utilityDescription = `Non-branded buttons for auxiliary and actions.`

export const dangerDescription = `Red buttons to alert users to possibly dangerous or irreversible actions.`

export const attributes = [
  {
    name: 'primary',
    default: 'false',
    type: 'boolean',
    description: 'Decorates other button types with styling that denotes an important action.'
  },
  {
    name: 'defaultStyle',
    default: 'true',
    type: 'boolean',
    description: 'Decorates a default, primary, or flat button to denote a neutral or less important action.'
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
