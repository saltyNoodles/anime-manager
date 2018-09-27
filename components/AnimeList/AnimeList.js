import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import styled from 'styled-components';

import { Page, Content } from 'templates';
import { Card, AnimeCard } from 'components';

const AnimeList = ({ query }) => {
  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error :(</p>;
        }

        const animeList = data.Page.media.map((anime, i) => (
          <AnimeCard
            title={anime.title.english || anime.title.romaji}
            image={anime.coverImage.large}
            key={`anime-card-${i}-${anime.title.romaji}`}
            data={{
              'Romaji Title': anime.title.romaji,
              Episodes: { value: anime.episodes },
              Description: {
                value: (
                  <div
                    dangerouslySetInnerHTML={{ __html: anime.description }}
                  />
                )
              },
              tags: {
                value: (
                  <TagList>
                    {anime.tags.map(({ name }, tagi) => (
                      <Tag key={`anime-${i}-tag${tagi}`}>{name}</Tag>
                    ))}
                  </TagList>
                ),
                show: anime.tags.length > 0
              }
            }}
          />
        ));

        return <CardList>{animeList}</CardList>;
      }}
    </Query>
  );
};

export { AnimeList };

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
