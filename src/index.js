import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const GRAPHCMS_API =
  'https://api-useast.graphcms.com/v1/cjle69hgb01kj01ff5kygjmhz/master';
const client = new ApolloClient({
  link: new HttpLink({uri: GRAPHCMS_API}),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
