export const description = `
DropMenu lists additional actions that can be performed. The default view is an ellipsis, from which the menu drops into view when a user clicks or mouses over. Actions are also represented with an icon. Actions can be triggered with an optional onClick function.
`

export const attributes = [
  {
    name: 'actions',
    default: '',
    type: 'Array',
    description: 'Icon, action, copyValue, disabled and onClick function for each row of DropMenu. Please see code snippet above for example formatting.' 
  }
]

