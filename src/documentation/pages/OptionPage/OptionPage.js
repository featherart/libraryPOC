import React from 'react'
import { Option } from '../../../components/Option'
import { theme } from '../theme'
import { PropsTable } from '../PropsTable'
import { Description } from '../Description'
import { LiveEditorWrapper } from '../LiveEditorWrapper'
import { attributes, description, toggleDescription } from './config'
import '../pageStyles.less'

const toggleCode = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '100px' }}>
  <Option type='toggle' label='base toggle' />
  <Option type='toggle' label='checked' checked />
  <Option type='toggle' label='disabled' disabled />
  <Option type='toggle' label='both checked and disabled' disabled checked />
</div>
`.trim()

const textToggleCode = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '100px' }}>
  <Option type='toggle' text label='base option' />
  <Option type='toggle' text label='checked' checked />
  <Option type='toggle' text label='disabled' disabled />
  <Option type='toggle' text label='disabled and checked' disabled checked />
</div>
`.trim()

const checkboxCode = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '100px 25px' }}>
  <Option type='checkbox' text label='base option' />
  <Option type='checkbox' text label='checked' checked />
  <Option type='checkbox' text label='disabled' disabled />
  <Option type='checkbox' text label='disabled and checked' disabled checked />
</div>
`.trim()

const radioCode = `
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '100px 25px' }}>
  <Option type='radio' label='base option' />
  <Option type='radio' label='checked' checked />
  <Option type='radio' label='disabled' disabled />
  <Option type='radio' label='disabled and checked' disabled checked />
</div>
`.trim()

const toggleGroupCode = `
<Option.Group inline name='group3' onChange={(e) => console.log('option selected: ' + e.target.value) }>
  <Option type='toggle' text value='apple' label='Apple' checked />
  <Option type='toggle' text value='banana' label='Banana' />
  <Option type='toggle' text value='chard' label='Chard' />
</Option.Group>
`.trim()

const checkboxGroupCode = `
<Option.Group name='group4' onChange={(e) => console.log('option selected: ' + e.target.value) }>
  <Option type='checkbox' value='apple' label='Apple' />
  <Option type='checkbox' value='banana' label='Banana' />
  <Option type='checkbox' value='chard' label='Chard' />
</Option.Group>
`.trim()

const subLabelCode = `
<Option value='value1' label='Label' subLabel='Sub-label' />
`.trim()

const subLabelGroupCode = `
<Option.Group inline name='group9' onChange={ ({ target: { value }}) => { console.log(value) }}>
  <Option value='value1' label='Option 1' subLabel='This is the first option' />
  <Option value='value2' label='Option 2' subLabel='This is the second option' />
  <Option value='value3' label='Option 3' subLabel='This is the third option' />
</Option.Group>
`.trim()

export const OptionPage = () => (
	<div className={'pageContainer'}>
		<div className={'title'}>Option</div>
		<Description description={description} />
		<div className='subTitle'>Plain Toggles</div>
		<Description description={toggleDescription} />
		<LiveEditorWrapper component={{ Option }} code={toggleCode} />
		<div className='subTitle'>Text Toggles</div>
		<LiveEditorWrapper component={{ Option }} code={textToggleCode} />
		<div className='subTitle'>Checkbox</div>
		<LiveEditorWrapper component={{ Option }} code={checkboxCode} />
		<div className='subTitle'>Radio</div>
		<LiveEditorWrapper component={{ Option }} code={radioCode} />
		<div className='subTitle'>Text Toggle Group - inline</div>
		<LiveEditorWrapper small component={{ Option }} code={toggleGroupCode} />
		<div className='subTitle'>Checkbox Group - vertical</div>
		<LiveEditorWrapper small component={{ Option }} code={checkboxGroupCode} />
		<div className='subTitle'>With Sub-Label</div>
		<LiveEditorWrapper small component={{ Option }} code={subLabelCode} />
		<div className='subTitle'>Sub-Label Group - inline</div>
		<LiveEditorWrapper small component={{ Option }} code={subLabelGroupCode} />
		<PropsTable attributes={attributes} />
	</div>
)
