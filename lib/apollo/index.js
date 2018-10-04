import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';

const config = {
  link: new HttpLink({
    uri: 'https://graphql.anilist.co'
  })
};

export default withData(config);
