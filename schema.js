import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
type Product {
  _id: ID!
  title: String!
  qty: Int
 }
 type Actor{
    _id: ID!,
    id: String
    name: String!
}

 input ProductInput {
     title: String!
     qty: Int
 }
 input ActorInput {
    name: String!
 }

 type Query {
    allProducts: [Product]
    allActors : [Actor]
    getActor(_id: String) : Actor
    getProduct(_id: String) : Product
   }
 type Mutation {
     createProduct(input: ProductInput) : Product
     createActor(input: ActorInput) : Actor
 }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
