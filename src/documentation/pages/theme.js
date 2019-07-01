export const theme = {
  plain: {
    color: '#C5C8C6',
    backgroundColor: '#1D1F21'
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: 'hsl(30, 20%, 50%)'
      }
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
      style: { color: 'hsla(333, 26%, 53%, 1)' }
    },
    {
      types: ['attr-name', 'string', 'char', 'builtin', 'inserted'],
      style: {
        color: 'hsla(142, 26%, 53%, 1)'
      }
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        'string',
        'variable',
        'language-css'
      ],
      style: {
        color: 'hsla(190, 69%, 58%, 1)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#e90'
      }
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: 'hsl(350, 40%, 70%)'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        opacity: '0.7'
      }
    }
  ]
};
