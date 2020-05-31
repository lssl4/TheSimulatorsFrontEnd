import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://simulatorscloud.azurewebsites.net/api/graphql?code=3IcQyM/14kG3g/cx5HwiSyNtKjADeS08VwSZbR7LsbFGfJmCRST2YQ==',
})

ReactDOM.render(
  <ApolloProvider client={client}>
 <React.StrictMode>
    <App></App>
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
