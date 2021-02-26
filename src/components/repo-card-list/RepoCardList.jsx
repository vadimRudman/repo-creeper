import React from 'react';
import './RepoCardList.scss';
import RepoCard from '../repo-card/RepoCard';

const RepoCardList = ({
    repoCardsData
}) => {
    const renderRepoCard = repoCard => (
        <RepoCard repoCardData={repoCard} />
    );

    const repoCards = repoCardsData.map(renderRepoCard);
    return (
        <div className="repo-card-list">
            {repoCards}
        </div>
    )
};

export default RepoCardList;
