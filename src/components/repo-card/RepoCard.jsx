import React from 'react';
import './RepoCard.scss';

const RepoCard = ({
    repoCardData
}) => {
    const { full_name, description, stargazers_count, watchers_count } = repoCardData;
    return (
        <div className='repo-card'>
            <h3>{full_name}</h3>
            <div className='repo-card__stats'>
                <span className='repo-card__stargazers'>
                    {stargazers_count} Stargazers
                </span>
                <span className='repo-card__watchers'>
                    {watchers_count} People Watching
                </span>
            </div>
            <span className='repo-card__description'>
                {description}
            </span>
        </div>
    )
};

export default RepoCard;
