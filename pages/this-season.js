import { Page, Content } from 'templates';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default () => {
  return (
    <Page>
      <Content>
        <Query
          query={gql`
            {
              Page {
                media(season: FALL, seasonYear: 2018) {
                  title {
                    english
                    romaji
                  }
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading...</p>;
            }
            if (error) {
              return <p>Error :(</p>;
            }
            console.log(data.Page);
            return data.Page.media.map(anime => (
              <div>
                <h2>{anime.title.romaji}</h2>
              </div>
            ));
          }}
        </Query>
      </Content>
    </Page>
  );
};
