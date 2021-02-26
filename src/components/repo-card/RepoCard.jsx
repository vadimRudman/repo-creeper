import React from 'react';
import './RepoCard.scss';

const RepoCard = ({
    repoCardData
}) => {
    const { repoName, repoDescription, numOfStargazers, numOfPeopleWatching } = repoCardData;
    return (
        <div className='repo-card'>
            <h3>{repoName}</h3>
            <div className='repo-card__stats'>
                <span>
                    {numOfStargazers} Stargazers
                </span>
                <span>
                    {numOfPeopleWatching} People Watching
                </span>
            </div>
            <span className='repo-card__description'>
                {repoDescription}
            </span>
        </div>
    )
};

export default RepoCard;
