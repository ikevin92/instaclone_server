const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    siteWeb: String
    description: String
    password: String
    avatar: String
    createAt: String
  }

  type Query {
    # User
    getUser(id: ID, username: String): User
    search(search: String): [User]
  }

  type Mutation {
    # User
    register(input: UserInput): User
    login(input: LoginInput): Token
    updateAvatar(file: Upload): UpdateAvatar
    deleteAvatar: Boolean
    updateUser(input: UserUpdateInput): Boolean
  }
`;

module.exports = typeDefs;
