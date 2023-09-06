import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($username: String!, $email: String!. $password: String!) {
    addUser(username: $username, email: $email, password: $password ) {
        token
        user {
            _id
            username
        }
    }
}
  
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!. $password: String!) {
    addUser(username: $username, email: $email, password: $password ) {
        token
        user {
            _id
            username
        }
    }
}

`;
export const SAVE_BOOK = gql`
  
`;
export const REMOVE_BOOK = gql`
  
`;
