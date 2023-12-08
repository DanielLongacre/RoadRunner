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
    }

    type Mutation {
        addProfile(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removeProfile(profileId: ID!): Profile
        addSkill(profileId: ID!, skill: String!): Profile
        removeSkill(profileId: ID!, skill: String!): Profile
    }
`;

module.exports = typeDefs;