import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import { MAX_PAGES_DISPLAYED } from './constants.ts'
import { TablePaginationProps } from './types.ts'
import { usePagination } from './usePagination.ts'

import './table-pagination.scss'

export const TablePagination = ({
  maxPages,
  action,
  isActive,
  searchTerm,
  isPriced,
}: TablePaginationProps) => {
  const [numPage, setNumPage] = useState(0)

  usePagination(numPage, action, isActive, searchTerm, isPriced)

  return (
    <div className="pagination-container">
      <ReactPaginate
        breakLabel=""
        nextLabel=">"
        initialPage={0}
        pageRangeDisplayed={MAX_PAGES_DISPLAYED}
        onPageChange={(e) => setNumPage(e.selected)}
        marginPagesDisplayed={0}
        pageCount={maxPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="pagination__item"
        previousClassName="pagination__item"
        nextClassName="pagination__item"
        pageLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        previousLinkClassName="pagination__link"
        activeClassName="pagination__item--selected"
      />
    </div>
  )
}
