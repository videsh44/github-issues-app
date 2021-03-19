import React from 'react';
import SearchFilter from './SearchFilter';
import './filters.css';
import RightButtons from './RightButtons';

const FiltersContainer = () => {
  return (
    <div className="filters__conatiner">
      <SearchFilter />
      <RightButtons />
    </div>
  );
};

export default FiltersContainer;
