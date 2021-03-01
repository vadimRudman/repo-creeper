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