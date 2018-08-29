import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const client = new ApolloClient({
    link: jest.fn(),
    cache: new InMemoryCache(),
  });

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
