import React from 'react';
import { cleanup, render, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RepoCardList from './RepoCardList';

const repoList = [
    {
        full_name: 'test1',
        description: 'desc1',
        stargazers_count: 1,
        watchers_count: 1
    },
    {
        full_name: 'test2',
        description: 'desc2',
        stargazers_count: 2,
        watchers_count: 2
    },
    {
        full_name: 'test3',
        description: 'desc3',
        stargazers_count: 3,
        watchers_count: 3
    },
    {
        full_name: 'test4',
        description: 'desc4',
        stargazers_count: 4,
        watchers_count: 4
    }
];

describe('Repo Card List', () => {
    afterEach(cleanup);

    it('should render without error when no data is passed', () => {
        const { container } = render(<RepoCardList />);
        expect(container).toBeDefined();
    });

    it('should render with the right amount of cards', () => {
        const { getAllByTestId } = render(<RepoCardList repoCardsData={repoList} />);
        const repoCards = getAllByTestId('repoCard');
        expect(repoCards).toHaveLength(3);
    });
});
