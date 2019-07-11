export const description = 'Small feedback elements that can be triggered on click, focus or hover. The default is click. Tooltips can appear in any of the 4 directions around their parent element - top, bottom, left or right. They can be styled with the semantic props critical, information, success or warning.'

export const darkDescription = 'Dark-themed tooltips for dark backgrounds or extra visual impact in light themes. These can either have a simple message or a heading and a message.'

export const semanticDescription = 'Semantic color elements for success, danger, warning and informational situations.'

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
    name: 'dark',
    default: 'false',
    type: 'boolean',
    description: 'For dark theme styling or extra visible impact over a light background.'
  },
  {
    name: 'success',
    default: 'false',
    type: 'boolean',
    description: 'For an action that can be completed successfully, such as a create action.'
  },
  {
    name: 'danger',
    default: 'false',
    type: 'boolean',
    description: 'For an action that can not be reversed, such as a delete action.'
  },
  {
    name: 'warning',
    default: 'false',
    type: 'boolean',
    description: 'For an action that may be risky such as a modify action.'
  },
  {
    name: 'information',
    default: 'false',
    type: 'boolean',
    description: 'For an action that requires extra information.'
  }
]
