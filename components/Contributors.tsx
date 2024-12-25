import React from 'react';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface ContributorsListProps {
  organization: string;
  contributors: Contributor[];
}

const ContributorsList: React.FC<ContributorsListProps> = ({  contributors }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto my-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Check out The most active Contributors of Hashtag</h2>
      {contributors.length > 0 ? (
        <ul className="space-y-6">
          {contributors.map((contributor) => (
            <li
              key={contributor.login}
              className="flex items-center space-x-6 border-b border-gray-200 py-4 hover:bg-gray-50 transition-all duration-300"
            >
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
                loading="lazy"
              />
              <div className="flex flex-col space-y-2">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  {contributor.login}
                </a>
                <p className="text-sm text-gray-600">
                  {contributor.contributions} contributions
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No contributors found.</p>
      )}
    </div>
  );
};

export default ContributorsList;
