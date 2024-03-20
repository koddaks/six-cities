import React from 'react';
import { useAppSelector } from '../../hooks';
import { getOffersNearby } from '../../store/app-data/selectors';
import '../pagination/pagination.css';

type PaginationProps = {
  offersPerPage: number;
  onPageClick: (pageNumber: number) => void;
  currentPage: number;
};

function Pagination({ offersPerPage, onPageClick, currentPage }: PaginationProps) {
  const totalOffers = useAppSelector(getOffersNearby);
  const pageNumbers = [];

  if (totalOffers) {
    for (let i = 1; i <= Math.ceil(totalOffers.length / offersPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="pagination">
      <ul className="pagination-list">
        {pageNumbers.map((number) => (
          <li className="pagination-list__item" key={number}>
            <button
              className={`${currentPage === number ? 'pagination-button--active' : ''} pagination-list__item-button`}
              type="button"
              onClick={() => onPageClick(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Pagination);
