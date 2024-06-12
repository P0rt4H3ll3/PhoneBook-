import { gql } from "apollo-server";

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
//type Query is the entry point for the user
export default typeDefs;
