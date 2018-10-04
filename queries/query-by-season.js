import gql from 'graphql-tag';

const queryBySeason = ({ season, year }) => {
  return gql`
    {
      Page {
        media(season: ${season}, seasonYear: ${year}) {
          studios {
            nodes {
              name
            }
          }
          title {
            english
            romaji
          }
          episodes
          tags {
            name
          }
          coverImage {
            large
          }
          isAdult
          bannerImage
          genres
          streamingEpisodes {
            title
            thumbnail
            url
            site
          }
          description(asHtml: false)
        }
      }
    }
  `;
};

export { queryBySeason };
