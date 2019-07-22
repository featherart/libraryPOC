export const description = 'A small headshot that gives each user a visual identity. These come in small, medium and large, or you can customize the size. Gravatars are automatically associated with an email address. In the case where a user doesn’t have a gravatar associated with their email address, a standard user image appears.'

export const attributes = [
  {
    name: 'email',
    default: '',
    type: 'String',
    description: 'The email to lookup an avatar for.'
  },
  {
    name: 'className',
    default: '',
    type: 'String',
    description: 'Custom styling for the Avatar.'
  },
  {
    name: 'size',
    default: '',
    type: 'number',
    description: 'Custom pixel size to render the Avatar.'
  },
  {
    name: 'small',
    default: 'false',
    type: 'boolean',
    description: 'For a small Avatar.'
  },
  {
    name: 'large',
    default: 'false',
    type: 'boolean',
    description: 'For a large Avatar.'
  },
  {
    name: 'rating',
    default: 'g',
    type: 'String',
    description: 'The highest avatar rating to allow.'
  }
]

