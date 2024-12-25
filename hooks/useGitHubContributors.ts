import axios from 'axios';

export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export const fetchContributors = async (organization: string, token?: string): Promise<Contributor[]> => {
  const contributorsMap: Record<string, Contributor> = {};

  try {
    const reposResponse = await axios.get(
      `https://api.github.com/orgs/${organization}/repos`,
      token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
    );

    const repos = reposResponse.data;

    await Promise.all(
      repos.map(async (repo: { name: string }) => {
        const contributorsResponse = await axios.get(
          `https://api.github.com/repos/${organization}/${repo.name}/contributors`,
          token ? { headers: { Authorization: `Bearer ${token}` } } : undefined
        );

        contributorsResponse.data.forEach((contributor: Contributor) => {
          if (!contributorsMap[contributor.login]) {
            contributorsMap[contributor.login] = {
              login: contributor.login,
              avatar_url: contributor.avatar_url,
              html_url: contributor.html_url,
              contributions: contributor.contributions,
            };
          } else {
            contributorsMap[contributor.login].contributions += contributor.contributions;
          }
        });
      })
    );

    return Object.values(contributorsMap);
  } catch (error) {
    console.error('Error fetching contributors:', error);
    return [];
  }
};
