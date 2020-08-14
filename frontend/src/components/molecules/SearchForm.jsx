import React from 'react';
import iconSearch from '../../images/icon-search.svg';

const SearchForm = () => {
  return (
    <>
      <div className="m-search">
        <input type="search" placeholder="Buscar produto" spellCheck="false" />
        <button className="a-button a-button--search">
          <img src={iconSearch} alt="Buscar produto" />
        </button>
      </div>
    </>
  );
};

export default SearchForm;
