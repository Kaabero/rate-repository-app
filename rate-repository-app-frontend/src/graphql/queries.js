import { gql } from '@apollo/client';

export const GET_USER = gql`
  query {
    me {
      username
      id
    }
  }
`;

export const GET_REPOSITORIES = gql`
    query {
        repositories {
          edges {
            node {
              id
              fullName
              description
              language
              forksCount
              stargazersCount
              ratingAverage
              reviewCount
              ownerAvatarUrl
            }
          }
        }
    }
`;

export const GET_USERS = gql`
  query {
    users {
      edges {
        node {
          id
          username
        }
      }
    }
  }
`;

// other queries...