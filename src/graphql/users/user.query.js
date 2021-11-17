import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';


export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.id;
      },
    },
    fullName: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.fullName;
      },
    },
    firstName: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.firstName;
      },
    },
    lastName: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.lastName;
      }
    },
    gender: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.gender;
      }
    },
    birthday: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.birthday;
      }
    },
    age: {
      type: GraphQLInt,
      resolve: (root, args, context, info) => {
        return root.age;
      }
    },
    avatar: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.avatar;
      }
    },
    address: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.address;
      }
    },
    zip: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.zip;
      }
    },
    state: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.state;
      }
    },
    phone: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.phone;
      }
    },
    email: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.email;
      }
    },
    twitter: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.twitter;
      }
    },
    ssn: {
      type: GraphQLString,
      resolve: (root, args, context, info) => {
        return root.ssn;
      }
    },
  },
});
