import React from 'react';
import './RepoCardList.scss';
import RepoCard from '../repo-card/RepoCard';

const RepoCardList = ({
    repoCardsData
}) => {
    const renderRepoCard = repoCard => (
        <RepoCard repoCardData={repoCard} />
    );

    const repoCards = repoCardsData
        ? repoCardsData.map(renderRepoCard)
        : null;
    return (
        <div className="repo-card-list">
            {repoCards}
        </div>
    )
};

export default RepoCardList;
