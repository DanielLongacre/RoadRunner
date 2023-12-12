const typeDefs = `
    type Profile {
        _id: ID
        name: String
        email: String
        password: String
        runs: [Run]
    }

    type Auth {
        token: ID!
        profile: Profile
      }

    type Run {
        _id: ID
        distance: Int!
        time: Int!
        date: String
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        runs: [Run]
    }

    type Mutation {
        addProfile(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removeProfile(profileId: ID!): Profile
        addRun(profileId: ID!, distance: Int!, time: Int!): Run
        removeRun(profileId: ID!, runId: ID!): Run
    }
`;

module.exports = typeDefs;