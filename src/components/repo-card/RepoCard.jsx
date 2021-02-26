import React from 'react';
import './BasicPage.scss';

const RepoCard = ({
    repoName,
    repoDescription,
    numOfStargazers,
    numOfPeopleWatching
}) => {
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
