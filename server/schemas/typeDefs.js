const typeDefs = `
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
        runs: [String]!
    }

    type Auth {
        token: ID!
        profile: Profile
      }

    type Run {
        _id: ID
        distance: Int
        time: Int
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        run
    }

    type Mutation {
        addProfile(name: String!): Profile
        removeProfile(profileId: ID!): Profile
        addRun(distance: Int!, time: Int!): Run
    }
`;

module.exports = typeDefs;