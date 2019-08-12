export const description = 'Pagination is kept simple with next and previous buttons and numbered pages only. Pagination is placed on the right-hand side of the component. Pagination controls should be placed both on the top and bottom of components that it is paging for easier accessibility.'

export const attributes = [
  {
    name: 'onChange',
    default: '',
    type: 'function',
    description: 'Function called when there is a user action' 
  },
  {
    name: 'total',
    default: '',
    type: 'number',
    description: 'The total number of pages.' 
  },
  {
    name: 'current',
    default: '0',
    type: 'number',
    description: 'The current page the user is on. This assumes a 0 based system.' 
  },
  {
    name: 'pageSize',
    default: '25',
    type: 'number',
    description: 'The number of items per page.' 
  },
  {
    name: 'className',
    default: '',
    type: 'String',
    description: 'Custom CSS class name to apply to the component.' 
  }
]
