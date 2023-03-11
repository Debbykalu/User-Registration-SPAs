import { useState } from 'react';

function Pagination({ productsPerPage, totalProducts, paginate }) {
  const [activePage, setActivePage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = number => {
    setActivePage(number);
    paginate(number);
  };

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          className={activePage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
