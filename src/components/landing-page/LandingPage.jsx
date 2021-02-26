import React, { useState } from 'react';
import './LandingPage.scss';
import SearchHeader from '../search-header/SearchHeader';
import FilterOptions from '../filter-options/FilterOptions';
import RepoCardList from '../repo-card-list';

const LandingPage = () => {
    const [repoName, setRepoName] = useState('');
    return (
        <div className="landing-page">
            <SearchHeader />
            <h2>Listing repositories for the user "{repoName}"</h2>
            <FilterOptions />
            <RepoCardList />
        </div>
    )
};

export default LandingPage;
