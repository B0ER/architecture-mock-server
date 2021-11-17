import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
} from 'graphql';
import { UserRepository } from '../database/repositories';
import { UserType } from './users/user.query';


export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      users: {
        type: new GraphQLList(UserType),
        resolve: (root, args, context, info) => {
          return UserRepository.getAll();
        },
      },
      user: {
        type: UserType,
        args: {
          id: {
            type: GraphQLID
          },
        },
        resolve: (root, args, context, info) => {
          const { id } = args; // the `id` argument for this field is declared above
          return UserRepository.findById(id); // hit the database
        },
      },
    },
  }),
});
