import { UserRepository } from '../../database/repositories';


export const UserService = {

  async getAll() {
    const users = UserRepository.getAll();
    return users;
  },

  /**
   *
   * @param {{ limit: number, page: number }}} param0
   */
  async getAllWithPagination({ limit, page }) {
    const users = UserRepository.getAll();
    const startIndex = limit * (page - 1);
    const endIndex = startIndex + limit;
    const paginateUser = users.slice(startIndex, endIndex);
    return paginateUser;
  },

  /**
   *
   * @param {string} profileId
   */
  async getDetails(id) {
    const profile = UserRepository.findById(id);

    if (!profile) {
      throw new Error('User was not found!');
    }

    return profile;
  }
};
