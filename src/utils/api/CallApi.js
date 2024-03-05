import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient ({
    uri: "https://devapi.acwpos.albinsonarias.com/graphql",
    cache: new InMemoryCache(),
});

