import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import styled from 'styled-components';

import { Page, Content } from 'templates';
import { AnimeList } from 'components';

import defaultFields from 'config/default-graphql-fields';

const ThisSeason = props => {
  return (
    <Page>
      <Content>
        <AnimeList query={props.query} />
      </Content>
    </Page>
  );
};

ThisSeason.getInitialProps = () => {
  const query = gql`
    {
      Page {
        media(season: FALL, seasonYear: 2018) {
          ${defaultFields}
        }
      }
    }
  `;

  return { query };
};

export default ThisSeason;
