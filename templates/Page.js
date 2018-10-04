import { injectGlobal } from 'styled-components';

import { Navbar } from 'components';
import navbarItems from 'config/nav-routes';

import withApolloClient from 'lib/apollo/with-apollo-client';
import { ApolloProvider } from 'react-apollo';

const Page = withApolloClient(({ children, apolloClient }) => (
  <ApolloProvider client={apolloClient}>
    <div>
      <Navbar items={navbarItems} />
      {children}
    </div>
  </ApolloProvider>
));

export { Page };

// Global Styles
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    font-family: 'Helvetica', sans-serif;
    padding: 0px;
    margin: 0px;
  }
`;
