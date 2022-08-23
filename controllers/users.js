const jwt = require("jsonwebtoken");
const {
  // BadRequestError,
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");
const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");

const getAllUsers = async (req, res) => {
  try {
    users = await User.find();
    res.status(StatusCodes.OK).json({ users, count: users.length });
  } catch (error) {
    // res.status(StatusCodes.NOT_FOUND).json({ error });
    throw new NotFoundError("cannot retrieve users");
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.body;
    user = await User.findById(id);
    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    // res.status(StatusCodes.NOT_FOUND).json({ error });
    throw new NotFoundError(`cannot retrieve user with id ${user._id}`);
  }
};

const createUser = async (req, res) => {
  try {
    users = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ users, count: users.length });
  } catch (error) {
    // res.status(StatusCodes.BAD_REQUEST).json({ error });
    throw new BadRequestError("cannot create user");
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.body;
    await User.findByIdAndUpdate(id, req.body, { runValidators: true });
    user = await User.findById(id);
    res.status(StatusCodes.NOT_FOUND).json({ user });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error });
    throw new BadRequestError("cannot update user", 201);
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    acknowledgement = await User.deleteMany();
    res.status(StatusCodes.NOT_FOUND).json({ acknowledgement });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error });
    throw new BadRequestError("cannot delete users", 201);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.body;
    user = await User.findByIdAndDelete(id);
    res.status(StatusCodes.NOT_FOUND).json({ user });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error });
    throw new BadRequestError("cannot delete user", 201);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    user = await User.findByIdAndDelete(id);
    res.status(StatusCodes.NOT_FOUND).json({ user });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error });
    throw new BadRequestError("cannot delete user", 201);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    user = await User.findById(id);
    res.status(StatusCodes.NOT_FOUND).json({ user });
  } catch (error) {
    // throw new BadRequestError("cannot retrieve user", 201);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, req.body, { runValidators: true });
    user = await User.findById(id);
    res.status(StatusCodes.NOT_FOUND).json({ user });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error });
    throw new BadRequestError("cannot update user", 201);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  getUserById,
  createUser,
  updateUser,
  updateUserById,
  deleteUser,
  deleteAllUsers,
  deleteUserById,
};
