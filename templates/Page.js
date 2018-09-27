const { Component } = React;

import { injectGlobal } from 'styled-components';

// Apollo Stuff
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

import { Navbar } from 'components';
import navbarItems from 'config/nav-routes';

// Global Styles
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    font-family: 'Helvetica', sans-serif;
    padding: 0px;
    margin: 0px;
  }
`;

const client = new ApolloClient({
  uri: `https://graphql.anilist.co`,
  fetch
});

export class Page extends Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
          <div>
            <Navbar items={navbarItems} />
            {this.props.children}
          </div>
        </ApolloProvider>
      </div>
    );
  }
}
