import { UserService } from './user.service';

export const UserController = {
  /**
   *
   * @param {import('fastify').FastifyRequest} req
   * @param {import('fastify').FastifyReply} reply
   * @returns {Promise}
   */
  async getAll(req, reply) {
    const users = await UserService.getAll();
    return users;
  },

  /**
   *
   * @param {import('fastify').FastifyRequest} req
   * @param {import('fastify').FastifyReply} reply
   * @returns {Promise}
   */
  async getAllWithPagination(req, reply) {
    const { limit, page } = req.query;
    const users = await UserService.getAllWithPagination({ limit, page });
    return users;
  },

  /**
   *
   * @param {import('fastify').FastifyRequest} req
   * @param {import('fastify').FastifyReply} reply
   * @returns {Promise}
   */
  async getDetails(req, reply) {
    const { userId } = req.params;
    const user = await UserService.getDetails(userId);
    return user;
  }
};
