import axios from "axios";

const baseGitHubApiUrl = 'https://api.github.com';

export const fetchRepoData = orgName => {
    const fetchRepoDataUrl = `${baseGitHubApiUrl}/orgs/${orgName}/repos`;
    return axios.get(fetchRepoDataUrl);
};