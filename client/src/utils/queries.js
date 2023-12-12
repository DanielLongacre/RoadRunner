import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      runs
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
query Query($profileId: ID!) {
  profile(profileId: $profileId) {
    _id
    email
    name
    runs {
      _id
      distance
      time
      date
    }
  }
}
`;
