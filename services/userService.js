const User = require("../models/userModel");

const createUserService = async (username, email, password) => {
  const user = new User({
    username,
    email,
    password,
  });

  return await user.save();
};

const getAllUsersService = async () => await User.find();

const getUserByIdService = async (id) => await User.findById(id);

module.exports = {
  getAllUsersService,
  getUserByIdService,
  createUserService,
};
