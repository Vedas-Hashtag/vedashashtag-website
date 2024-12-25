import React from "react";
import { Globe, Github, Twitter } from "lucide-react";
import ContributorSlider from "./ContributorsSlide";
import MaxWidthWrapper from "./MaxWidthWrapper";

export interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  twitter_url?: string;
  website_url?: string;
}

interface ContributorsListProps {
  organization: string;
  contributors: Contributor[];
  isLoading?: boolean;
  error?: string | null;
}

/**
 * Component to display a card with contributor information.
 *
 * @param {Object} props - The properties object.
 * @param {Contributor} props.contributor - The contributor object containing details to display.
 * @returns {JSX.Element} A card component displaying contributor's avatar, login, contributions, and social links.
 *
 * @component
 * @example
 * const contributor = {
 *   avatar_url: 'https://example.com/avatar.jpg',
 *   login: 'username',
 *   contributions: 42,
 *   html_url: 'https://github.com/username',
 *   twitter_url: 'https://twitter.com/username',
 *   website_url: 'https://example.com'
 * };
 * return <ContributorCard contributor={contributor} />;
 */
export const ContributorCard = ({
  contributor,
}: {
  contributor: Contributor;
}) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
    <div className="flex flex-col items-center text-center space-y-2">
      <img
        src={contributor.avatar_url}
        alt={`${contributor.login}'s avatar`}
        className="w-24 h-24 rounded-lg object-cover mb-4"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold mb-4">{contributor.login}</h3>
      <p className="text-muted-foreground text-sm">
        Contributions:
        {contributor.contributions}
      </p>
      <div className="flex space-x-3">
        <a
          href={contributor.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label={`${contributor.login}'s GitHub profile`}
        >
          <Github className="w-5 h-5" />
        </a>
        {contributor.twitter_url && (
          <a
            href={contributor.twitter_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label={`${contributor.login}'s Twitter profile`}
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
        {contributor.website_url && (
          <a
            href={contributor.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label={`${contributor.login}'s website`}
          >
            <Globe className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const LoadingSkeleton = () => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-pulse">
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-lg bg-gray-200 mb-4" />
      <div className="h-6 w-24 bg-gray-200 rounded mb-4" />
      <div className="flex space-x-3">
        <div className="w-5 h-5 bg-gray-200 rounded" />
        <div className="w-5 h-5 bg-gray-200 rounded" />
        <div className="w-5 h-5 bg-gray-200 rounded" />
      </div>
    </div>
  </div>
);

const ContributorsList: React.FC<ContributorsListProps> = ({
  organization,
  contributors,
  isLoading = false,
  error = null,
}) => {
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-red-600 bg-red-50 rounded-lg p-4">
          {error}
        </div>
      </div>
    );
  }

  return (
    <MaxWidthWrapper className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-sm text-green-800">
          People behind the magic
        </span>
      </div>

      <h2 className="text-3xl font-bold mb-8">Contributors</h2>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      ) : contributors.length > 0 ? (
        <ContributorSlider contributor={contributors} />
      ) : (
        <p className="text-center text-gray-500">
          No contributors found for {organization}.
        </p>
      )}
    </MaxWidthWrapper>
  );
};

export default ContributorsList;
