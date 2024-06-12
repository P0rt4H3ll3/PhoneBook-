import { gql } from "apollo-server";
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
    allPersons: [Person!]!
    person(name: String): [Person!]
  }
`;

export default typeDefs;
