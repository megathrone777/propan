import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://propan-admin.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
