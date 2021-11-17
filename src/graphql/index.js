import mercurius from 'mercurius';
import { schema } from './root.query';

/**
 *
 * @param {import('fastify').FastifyInstance} server
 * @param {import('fastify').FastifyPluginOptions} options
 */
export const graphQLRouter = async (server, options) => {
  await server.register(mercurius, {
    schema,
    graphiql: 'graphiql',
  });
};
