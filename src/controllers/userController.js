const User = require("./../models/userModel");
require('dotenv').config();
const jwt = require('jsonwebtoken');

const getAllUser = async (req, res) => {
  let Users = await User.find({});
  res.send(JSON.stringify(Users));
};

const postUser = async (req, res) => {
  try {
    // const UserById = await User.findOne({id:req.body.id})
    const UserByUserName = await User.findOne({ username: req.body.username });
    const UserByEmail = await User.findOne({ email: req.body.email });
    if (UserByUserName || UserByEmail) {
      return res.status(201).send("this user is already exists");
    }
    {
      const newUser = new User(req.body);
      newUser.save();
      res.status(200).send({ message: "user succesfully registered" });
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundUser = await User.findOne({ username: username, password: password });
    if (foundUser) {
      const token = jwt.sign(
        { username: username, password: password },
        process.env.SECRET_TOKEN,
        {
          expiresIn: "1h",
        }
      );
      return res.send({message: 'welcome', token: token});
    } else {
      return res.send({message: "Invalid username or password "});
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};

const getUserById = async (req, res) => {
  let UserById = await User.findOne({ id: req.params.id });
  console.log(UserById);
  res.send(UserById);
};

const deleteUser = async (req, res) => {
  let selectedUser = await User.findOne({ id: req.params.id });
  let _id = selectedUser._id;
  let deletedUser = await User.findByIdAndDelete({ _id });
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  let updatedUser = await User.findOneAndUpdate({ id: id }, req.body);
};

const updateUserPutMethod = async (req, res) => {
  let updatedUser = await User.replaceOne({ id: req.params.id }, req.body);
};

module.exports = {
  getAllUser,
  postUser,
  getUserById,
  deleteUser,
  updateUser,
  updateUserPutMethod,
  login,
};
