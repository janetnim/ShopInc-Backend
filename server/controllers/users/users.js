const Users = require('../../models').Users

class UsersController {
  static async users() {
    const user = await Users.findOne
  }
}

export default UsersController;