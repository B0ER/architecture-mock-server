import ProfileGenerator from 'random-profile-generator';

const initUsers = () => {
  const profiles = [];

  for (let i = 0; i < 30; i++) {
    const randomProfile = ProfileGenerator.profile();
    profiles.push(randomProfile);
  }

  return profiles;
};
const _users = initUsers();


export const UserRepository = {

  getAll() {
    return _users;
  },

  /**
   *
   * @param {string} id
   */
  findById(id) {
    return _users.find(user => user.id === id);
  }
};
