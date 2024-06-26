import { gql } from "graphql-tag";
//
//typedefinitions how the data gets represented ?
//
const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
    phone: String!
  }

  type Query {
    person(name: String): [Person!]
  }
`;

export default typeDefs;
