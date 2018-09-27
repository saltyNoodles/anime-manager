import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import styled from 'styled-components';

import { Page, Content } from 'templates';
import { AnimeList } from 'components';

import defaultFields from 'config/default-graphql-fields';
export default () => {
  return (
    <Page>
      <Content>
        <AnimeList
          query={gql`
            {
              Page {
                media(season: FALL, seasonYear: 2018) {
                  ${defaultFields}
                }
              }
            }
          `}
        />
      </Content>
    </Page>
  );
};
