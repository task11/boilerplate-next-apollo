import { ApolloClient, createHttpLink } from '@apollo/client';
import { cache } from '@/apollo/cache';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
});

export const client = new ApolloClient({
  link: httpLink,
  cache
});
