import React from 'react';
import NavHeader from './header/NavHeader';
import IssuesContainer from './issues/IssuesContainer';
import FiltersContainer from './main-section-filters/FiltersContainer';
import PageHeadContainer from './page-head/PageHeadContainer';

const MainPage = () => {
  return (
    <div>
      <NavHeader />
      <PageHeadContainer />
      <div className="main__section__container">
        <FiltersContainer />
        <IssuesContainer />
      </div>
    </div>
  );
};

export default MainPage;
