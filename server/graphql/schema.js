import { gql } from "@apollo/server";
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
