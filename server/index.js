import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolver.js";
import db from "./database/telefonbuch.json" assert { type: "json" }; // without assert {....} does not work.. dont know why
import { v4 as uuidv4 } from "uuid"; // needed to generat unique ids

//
//server setup
//
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4444 },
  context: () => {
    //The context function should return an object that all your server's resolvers share during an operation's execution. This enables resolvers to share helpful context values, such as a database connection.
    // through the context the resolvers have access to the db
    // context only returns objects so i have to use Object.values() to return to Array
    return db
      .map((person) => ({ id: uuidv4(), ...person })) // i need to give the database entries unique ID´s
      .sort((a, b) => a.name.localeCompare(b.name)); // sorts db alphabetically
  },
}).then(({ url }) => {
  console.log(`server ready at ${url}`);
});
