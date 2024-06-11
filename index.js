import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// db
import db from "./telefonbuch.json" assert { type: "json" };
import { v4 as uuidv4 } from "uuid";
const dbWithID = db.map((person) => ({ id: uuidv4(), ...person }));
//types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    allPersons: () => {
      return dbWithID;
    },
    person: (root, { name }, content) => {
      return dbWithID.filter((person) =>
        person.name.toLowerCase().includes(name.toLowerCase())
      );
    }, // (name: String): [Person!]!
  },
};

//server setup
const server = new ApolloServer({
  typeDefs, //typeDefs definitions of types of data, names and numbers
  resolvers, //resolvers
});

startStandaloneServer(server, {
  listen: { port: 4444 },
}).then(({ url }) => {
  console.log(`server ready at ${url}`);
});
