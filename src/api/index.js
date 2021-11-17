import { userRouter } from './users';

/**
 *
 * @param {import('fastify').FastifyInstance} server
 * @param {import('fastify').FastifyPluginOptions} options
 */
export const endpointRouter = async (instance, options) => {
  await instance.register(userRouter, { prefix: '/users' });
};
