import React from 'react'
import md5 from 'md5'
import querystring from 'query-string'
import cx from 'classnames'
import './avatar.less'

// type Props = {
//   className?: string,
//   email: string,
//   large?: boolean,
//   rating?: string,
//   size?: number,
//   small?: boolean
// }

const base = 'https://www.gravatar.com/avatar/'
const avatarSizes = {
  small: 16,
  medium: 20,
  large: 24
}

export const Avatar = ({
  className,
  email,
  large,
  rating = 'g',
  size = avatarSizes.medium,
  small
}) => {
  const classes = cx('ui', 'avatar', className)

  if (small) size = avatarSizes.small
  if (large) size = avatarSizes.large

  const query = querystring.stringify({
    size: size,
    rating: rating,
    default: 'mm'
  })

  // Trim and lowercases all registered emails for Gravatar service.
  const formattedEmail = ('' + email).trim().toLowerCase()
  const hash = md5(formattedEmail, { encoding: 'binary' })
  const src = `${base}${hash}?${query}`

  console.log('src', src)

  return (
    <img
      alt={`Avatar for ${formattedEmail}`}
      src={src}
      height={size}
      width={size}
      className={classes}
    />
  )
}
