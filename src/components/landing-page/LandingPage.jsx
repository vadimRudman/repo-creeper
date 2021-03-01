import React, { useEffect, useState } from 'react';
import './LandingPage.scss';
import { fetchRepoData } from '../../tools/repoFetch';
import { parseRepoProjectsData } from '../../tools/repoListParser';

import SearchHeader from '../search-header/SearchHeader';
import FilterOptions from '../filter-options/FilterOptions';
import RepoCardList from '../repo-card-list/RepoCardList';
import ErrorDisplay from '../error-display/ErrorDisplay';

const LandingPage = () => {
    const [repoName, setRepoName] = useState('');
    const [repoProjects, setRepoProjects] = useState([]);
    const [isDisplayError, setIsDisplayError] = useState(false);

    const searchRepo = repoName => {
        fetchRepoData(repoName)
            .then(response => {
                setRepoProjects((parseRepoProjectsData(response.data)));
                setIsDisplayError(false);
            })
            .catch(error => {
                console.log("im a sophisticated error logger :)", error);
                setIsDisplayError(true);
                setRepoProjects([]);
            });
    }

    useEffect(() => {
        if (repoName) {
            searchRepo(repoName);
        }
    }, [repoName]);

    const renderDisplay = () => (
        <React.Fragment>
            <FilterOptions />
            <RepoCardList repoCardsData={repoProjects}/>
        </React.Fragment>
    );

    const renderError = () => (
        <ErrorDisplay />
    );


    return (
        <div className="landing-page">
            <SearchHeader onSearch={setRepoName}/>
            <h2>Listing repositories for the user "{repoName}"</h2>
            {isDisplayError ? renderError() : renderDisplay()}
        </div>
    )
};

export default LandingPage;
