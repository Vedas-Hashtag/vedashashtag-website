import axios from 'axios';

export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export const fetchContributors = async (organization: string, token?: string): Promise<Contributor[]> => {
  const contributorsMap: Record<string, Contributor> = {};
  
  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    ...(token && { 'Authorization': `token ${token}` }) // changed it from bearer to token
  };

  try {
    // First, check if we can access the organization
    const reposResponse = await axios.get(
      `https://api.github.com/orgs/${organization}/repos`, 
      { 
        headers,
        params: {
          per_page: 100, // per page ma ajha repoa
          type: 'public'  // jus fetch public repos
        }
      }
    );

    const repos = reposResponse.data;

    await Promise.all(
      repos.map(async (repo: { name: string }) => {
        try {
          const contributorsResponse = await axios.get(
            `https://api.github.com/repos/${organization}/${repo.name}/contributors`,
            { 
              headers,
              params: {
                per_page: 100 
              }
            }
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
        } catch (error) {
          console.warn(`Failed to fetch contributors for ${repo.name}:`, error);
          // continue with aru repos even if one fails
        }
      })
    );

    return Object.values(contributorsMap);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        console.error('API rate limit exceeded or authentication required');
        if (!token) {
          console.error('Consider adding a GitHub token for higher rate limits');
        }
      } else if (error.response?.status === 404) {
        console.error('Organization not found or no public access');
      }
    }
    throw error;
  }
};