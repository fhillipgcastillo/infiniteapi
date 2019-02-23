import mongoose from "mongoose";
import { GraphQLServer } from "graphql-yoga";
import {resolvers} from './resolvers';
import config from './config';

/* Connect Mongoose with MongoDb */
mongoose.Promise = global.Promise;
mongoose.connect(config.mongo.connectionString);

/* Statics */

/* Server Setup */
const server = new GraphQLServer({
  typeDefs: "./src/schemas.graphql",
  resolvers : resolvers
});


/* Running the Server */
server.start(config.options, () => {
  console.log(
    `Server running at http://localhost:${config.options.port}${config.options.endpoint}`
  );
});