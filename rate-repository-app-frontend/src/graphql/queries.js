import { gql } from '@apollo/client';

export const GET_REPOSITORY = gql` 
  query repository($repositoryId: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;


export const GET_USER = gql`
  query {
    me {
      username
      id
    }
  }
`;

export const GET_REPOSITORIES = gql`
    query repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
          repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
                url
                reviews {
                  edges {
                    node {
                      id
                      text
                      rating
                      createdAt
                      user {
                        id
                        username
                      }
                    }
                  }
                }
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