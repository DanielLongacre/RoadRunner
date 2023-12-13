import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_RUN = gql`
mutation Mutation($profileId: ID!, $distance: Int!, $time: Int!) {
  addRun(profileId: $profileId, distance: $distance, time: $time) {
    distance
    time
    date
  }
}
`;

export const REMOVE_RUN = gql`
mutation Mutation($profileId: ID!, $runId: ID!) {
  removeRun(profileId: $profileId, runId: $runId) {
    date
    distance
    time
    _id
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
