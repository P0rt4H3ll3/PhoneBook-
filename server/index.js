import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./graphql/schema.js";
import Query from "./graphql/resolvers/Query.js";
import db from "./database/telefonbuch.json" assert { type: "json" };
import { v4 as uuidv4 } from "uuid";

//
//server setup
//
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query },
});

startStandaloneServer(server, {
  listen: { port: 4444 },
  context: () => {
    // i need to give the database unique ID
    // through the context the resolvers have access to the db
    // context only returns objects so i have to use Object.values() to return to Array
    const context = db.map((person) => ({ id: uuidv4(), ...person }));
    return context;
  },
}).then(({ url }) => {
  console.log(`server ready at ${url}`);
});
