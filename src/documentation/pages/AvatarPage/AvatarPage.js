import React, { useState} from 'react'
import { theme } from '../theme'
import { Avatar } from '../../../components'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { LiveEditorWrapper } from '../LiveEditorWrapper'
import {
  attributes,
  description,
} from './config'
import '../pageStyles.less'

const code = `
<Avatar email='ann.elk.is.not.a.moose@gmail.com' />
`.trim()

const sizeCode = `
<div  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '25px 25px' }}>
  <Avatar small email='ann.elk.is.not.a.moose@gmail.com' />
  <Avatar email='ann.elk.is.not.a.moose@gmail.com' />
  <Avatar large email='ann.elk.is.not.a.moose@gmail.com' />
</div>
`.trim()

const customCode = `
<Avatar size={150} email='ann.elk.is.not.a.moose@gmail.com' />
`.trim()

const noGravatarCode = `
<Avatar email='' />
`.trim()

export const AvatarPage = () => {
  return (
    <div className='pageContainer'>
      <div className='title'>Avatar</div>
      <div className='subTitle'>Default Avatar</div>
        <Description description={description} />
        <LiveEditorWrapper component={{ Avatar }} code={code} />
      <div className='subTitle'>Sizes</div>
        <LiveEditorWrapper component={{ Avatar }} code={sizeCode} />
      <div className='subTitle'>Custom Sizes</div>
        <LiveEditorWrapper component={{ Avatar }} code={customCode} />
      <div className='subTitle'>No Gravatar</div>
        <LiveEditorWrapper component={{ Avatar }} code={noGravatarCode} />
      <PropsTable attributes={attributes} />
    </div>
  )
}
