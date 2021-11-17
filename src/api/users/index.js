import { UserController } from './user.controller';
import { userItemOutputSchema } from './outputs';

/**
 *
 * @param {import('fastify').FastifyInstance} server
 * @param {import('fastify').FastifyPluginOptions} options
 */
export const userRouter = async (server, options) => {

  server.get('/all',
    {
      schema: {
        response: {
          200: {
            type: 'array',
            items: userItemOutputSchema,
          },
        }
      }
    },
    UserController.getAll);


  server.get('/paginate',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            page: { type: 'number', minimum: 1 },
            limit: { type: 'number', minimum: 1, maximum: 20 },
          },
        },
        response: {
          200: {
            type: 'array',
            items: userItemOutputSchema,
          },
        }
      }
    },
    UserController.getAllWithPagination);


  server.get('/details/:userId',
    {
      schema: {
        params: { type: 'object', properties: { userId: { type: 'string' } } },
        response: {
          200: {
            type: 'object',
            properties: {
            }
          }
        }
      }
    },
    UserController.getDetails);
};
