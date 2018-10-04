import styled from 'styled-components';

import { Page, Content } from 'templates';
import { ListBySeason } from 'components/AnimeList';

const ThisSeason = props => {
  return (
    <Page>
      <Content>
        <ListBySeason season="FALL" year="2018" />
      </Content>
    </Page>
  );
};

export default ThisSeason;
