import React from 'react'
import style from './description.less'

export const Description = ({ description }) => (
  <p className={style.description}>{description}</p>
)
