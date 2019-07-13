import models from "../models/users";


class UserController {
  static signUp(req, res) {
    const { firstname, lastname, email, password, address } = req.body;
    const user = new models(firstname, lastname, email, password, address);
    const newUser = newUser.createUser();
    return res.status(201).json({ msg: "user account created", data: user });
  }
}
export default UserController;