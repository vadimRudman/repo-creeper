import React, { useEffect, useState } from 'react';
import './LandingPage.scss';
import { fetchRepoData } from '../../tools/repoFetch';
import { parseRepoProjectsData, sortByAlpha, sortByStars } from '../../tools/repoListParser';
import { ALPHABETICAL, STARS } from '../../constants/filters';

import SearchHeader from '../search-header/SearchHeader';
import FilterOptions from '../filter-options/FilterOptions';
import RepoCardList from '../repo-card-list/RepoCardList';
import ErrorDisplay from '../error-display/ErrorDisplay';

const LandingPage = () => {
    const [repoName, setRepoName] = useState('');
    const [repoProjects, setRepoProjects] = useState([]);
    const [sortType, setSortType] = useState(ALPHABETICAL);
    const [isDisplayError, setIsDisplayError] = useState(false);

    const searchRepo = repoName => {
        fetchRepoData(repoName)
            .then(response => {
                const parsedRepos = (parseRepoProjectsData(response.data));
                switch (sortType) {
                    case ALPHABETICAL: {
                        console.log(sortByAlpha(parsedRepos));
                        setRepoProjects(sortByAlpha(parsedRepos));
                        break;
                    }
                    case STARS:
                        console.log(sortByStars(parsedRepos));
                        setRepoProjects(sortByStars(parsedRepos));
                        break;
                    default:
                        setRepoProjects(parsedRepos);
                };
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
    }, [repoName, sortType]);

    const renderDisplay = () => (
        <React.Fragment>
            <FilterOptions onSort={setSortType} />
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
            <div className="landing-page__display-wrapper">
                {isDisplayError ? renderError() : renderDisplay()}
            </div>
        </div>
    )
};

export default LandingPage;
