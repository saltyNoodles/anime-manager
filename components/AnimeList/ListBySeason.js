import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import styled from 'styled-components';

import { Page, Content } from 'templates';
import { Card, AnimeCard } from 'components';
import { queryBySeason } from 'queries';

const ListBySeason = ({ year, season }) => {
  return (
    <Query query={queryBySeason({ year, season })}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error loading data.</p>;
        }

        const animeList = data.Page.media.map((anime, i) => (
          <AnimeCard
            title={anime.title.english || anime.title.romaji}
            image={anime.coverImage.large}
            key={`anime-card-${i}-${anime.title.romaji}`}
            data={{
              Studio: {
                value: (
                  <TagList>
                    {anime.studios.nodes.map(({ name }, studioI) => (
                      <Tag key={`anime-${i}-studio-${studioI}`}>{name}</Tag>
                    ))}
                  </TagList>
                ),
                show: anime.studios.nodes.length > 0
              },
              tags: {
                value: (
                  <TagList>
                    {anime.tags.map(({ name }, tagI) => (
                      <Tag key={`anime-${i}-tag-${tagI}`}>{name}</Tag>
                    ))}
                  </TagList>
                ),
                show: anime.tags.length > 0
              },
              Episodes: { value: anime.episodes },
              'Romaji Title': { value: anime.title.romaji },

              Description: {
                value: (
                  <div
                    dangerouslySetInnerHTML={{ __html: anime.description }}
                  />
                )
              }
            }}
          />
        ));

        return <CardList>{animeList}</CardList>;
      }}
    </Query>
  );
};

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 20px;
`;

const TagList = styled.ul`
  list-style: none;
  font-size: 10pt;
  margin: 0px;
  padding: 0px;
  display: inline;
`;

const Tag = styled.li`
  color: white;
  display: inline-block;
  background: #343434;
  padding: 6px;
  font-size: 0.8em;
  border-radius: 8px;
  margin: 3px;
`;

const AdultTag = styled(Tag)`
  background: #dd2234;
`;

export { ListBySeason };
