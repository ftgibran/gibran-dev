import React from 'react'
import classnames from 'classnames'
import {usePagination, DOTS} from './usePagination'
import type {UsePaginationProps} from './usePagination'

export interface Props {
  onPageChange?: (page: number) => void
}

export function Pagination(props: Props & UsePaginationProps & HTMLProps) {
  const {onPageChange, totalCount, siblingCount, currentPage, pageSize} = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange?.length ?? 0) < 2) {
    return null
  }

  const onNext = () => {
    onPageChange?.(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange?.(currentPage - 1)
  }

  const lastPage = paginationRange?.[paginationRange.length - 1]

  return (
    <div {...props}>
      <ul className={classnames('pagination-container')}>
        {/* Left navigation arrow */}
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange?.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>
          }

          // Render our Page Pills
          return (
            <li
              key={pageNumber}
              className={classnames('pagination-item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange?.(Number(pageNumber))}
            >
              {pageNumber}
            </li>
          )
        })}
        {/*  Right Navigation arrow */}
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </div>
  )
}
