export const parseRepoProjectsData = repoProjectsData => {
    const parsedProjects = repoProjectsData.map(({
        full_name,
        description,
        stargazers_count,
        watchers_count
    }) => ({
        full_name,
        description,
        stargazers_count,
        watchers_count
    }));

    return parsedProjects;
};

export const sortByAlpha = projects => {
    return projects.sort((firstProj, secondProj) => {
        if(firstProj.full_name < secondProj.full_name) { return -1; }
        if(firstProj.full_name > secondProj.full_name) { return 1; }
        return 0;
    });
};

export const sortByStars = projects => {
    return projects.sort((firstProj, secondProj) => {
        if(firstProj.stargazers_count < secondProj.stargazers_count) { return -1; }
        if(firstProj.stargazers_count > secondProj.stargazers_count) { return 1; }
        return 0;
    });
};