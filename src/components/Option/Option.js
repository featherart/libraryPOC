import React from 'react'
import cx from 'classnames'
import './option.less'

import { OptionGroup } from './OptionGroup'

const createLabel = (
  label,
  subLabel
) => {
  console.log('label', label)
  return (
    <div className='label'>
      <span className='label-content'>{label}</span>
      {subLabel && <span className='sublabel-content'>{subLabel}</span>}
    </div>
  )
}

export const Option = ({
  type = 'radio',
  label,
  subLabel,
  disabled,
  name,
  value,
  checked,
  text,
  className,
  onChange,
  ...rest
}) => {
  const styleClasses = cx({ disabled })
  const styleType = `${type}-check`
  const classes = cx('ui', 'option', className, styleClasses, styleType)
  const typeClass = cx(styleType, { text }, { disabled }, { checked })
  const wrapperClass = cx(type, { text })
  return (
    <div className={classes}>
      <label className={wrapperClass}>
        <input
          type={type === 'radio' ? 'radio' : 'checkbox'}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          defaultChecked={checked}
        />
        <span className={typeClass} />
        {createLabel(label, subLabel)}
      </label>
    </div>
  )
}

Option.Group = OptionGroup
