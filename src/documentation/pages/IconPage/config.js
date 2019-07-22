import React from 'react'

export const description = 'Icons provide visual context and enhance usability. Our icon library is a smaller, curated version of the extensive Streamline Icon Library. It features four pre-defined sizes and both fill and line variations.'

export const secondDescription = `If you require additional icons that are not available within this icon library, please email your request to the NGC Design Team`

export const attributes = [
  {
    name: 'name',
    default: '',
    type: 'String',
    description: 'Name of the icon to render.'
  },
  {
    name: 'size',
    default: 'medium',
    type: 'enum: [smaller, small, medium, large]',
    description: 'Size of the icon.'
  },
  {
    name: 'strong',
    default: 'false',
    type: 'boolean',
    description: 'Makes icon bold.'
  },
  {
    name: 'className',
    default: '',
    type: 'String',
    description: 'Custom styling.'
  }
]
