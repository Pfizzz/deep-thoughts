// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs query called helloworld, type of data returned will be a string
const typeDefs = gql`
type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;