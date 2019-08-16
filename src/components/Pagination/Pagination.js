// @flow
import React, { useState } from 'react'
import './pagination.less'
import cx from 'classnames'

const calculateLastPage = (props) => {
	return Math.floor((props.total - 1) / props.pageSize) + 1
}

const PaginationContainer = ({
  ...props
}) => {
	const [ current, setCurrent ] = useState(1)
	const [ currentInputValue, setCurrentInputValue ] = useState(current)

	const hasPrev = () => {
		return current > 1
	}

	const hasNext = () => {
		return current < calculateLastPage(props)
	}

	const prev = () => {
		if (hasPrev()) {
			handleChange(current - 1)
		}
	}

	const next = () => {
		if (hasNext()) {
			handleChange(current + 1)
		}
	}

	const first = () => {
		if (hasPrev()) {
			handleChange(1)
		}
	}

	const last = () => {
		if (hasNext()) {
			handleChange(calculateLastPage(props))
		}
	}

	const handleChange = (page) => {
		let newPage = page
		if (Math.floor(newPage) === newPage && newPage >= 1 && newPage !== current) {
			const maxPage = calculateLastPage(props)
			if (newPage > maxPage) {
				newPage = maxPage
			}
			setCurrent(newPage)
			setCurrentInputValue(newPage)

			props.onChange(newPage)
			return newPage
		}

		return current
	}

	const handleKeyUp = (e) => {
		const value = getValidValue(e)
		if (value !== currentInputValue) {
			setCurrentInputValue(value)
		}
		if (e.key === 'Enter' && typeof value === 'number') {
			handleChange(value)
		}
	}

	const getValidValue = (e) => {
		const inputValue = e.target.value
		let value
		if (inputValue === '') {
			value = inputValue
		} else if (isNaN(Number(inputValue))) {
			value = currentInputValue
		} else {
			value = Number(inputValue)
		}
		return value
	}

	const totalPages = calculateLastPage(props)

	return (
		<div className={'pagination'}>
			<div
				title={'First Page'}
				onClick={first}
				tabIndex={hasPrev() ? 0 : null}
				className={`${hasPrev() ? '' : 'pagination-disabled'} pagination-first double-arrow`}
				disabled={!hasPrev()}
			>
				<a className={'single-arrow'} />
				<a className={'single-arrow'} />
			</div>

			<div
				title={'Previous Page'}
				onClick={prev}
				tabIndex={hasPrev() ? 0 : null}
				className={`${hasPrev() ? '' : 'pagination-disabled'} pagination-prev`}
				disabled={!hasPrev()}
			>
				<a />
			</div>

			<div className={'pagination-body'}>
				<input type='text' value={currentInputValue} onKeyUp={handleKeyUp} onChange={handleKeyUp} size='3' />
				<span> of </span>
				{totalPages}
			</div>

			<div
				title={'Next Page'}
				onClick={next}
				tabIndex={hasNext() ? 0 : null}
				className={`${hasNext() ? '' : 'pagination-disabled'} pagination-next`}
				disabled={!hasNext()}
			>
				<a />
			</div>

			<div
				title={'Last Page'}
				onClick={last}
				tabIndex={hasNext() ? 0 : null}
				className={`${hasNext() ? '' : 'pagination-disabled'} pagination-last double-arrow`}
				disabled={!hasNext()}
			>
				<a className={'single-arrow'} />
				<a className={'single-arrow'} />
			</div>
		</div>
	)
}

export const Pagination = ({ onChange, total, current, pageSize = 25, className }) => {
	const classes = cx('ui', 'pagination', className)
	return (
		<div className={classes}>
			<PaginationContainer
				// Pagination endpoint is 0 based. Shifting -1 to adjust from ui
				onChange={(newPage) => onChange(newPage - 1)}
				total={total}
				// Pagination endpoint is 0 based. Shifting +1 to adjust for ui
				current={current + 1}
				pageSize={pageSize}
			/>
		</div>
	)
}
