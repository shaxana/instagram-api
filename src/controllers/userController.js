const User = require("./../models/userModel");

const getAllUser = async (req, res) => {
  let Users = await User.find({});
  console.log(Users);
  res.send(JSON.stringify(Users));
};
const postUser = async (req, res) => {
    const UserById = await User.findOne({id:req.body.id})
    const UserByUserName = await User.findOne({username:req.body.username})
    const UserByEmail = await User.findOne({email:req.body.email})
  if (UserById || UserByUserName || UserByEmail){
    res.send("this user is already exists")
  }
  else{
  const newUser = new User(req.body);
  newUser.save();
  }

};

const getUserById = async (req, res) => {
  let UserById = await User.findOne({ id: req.params.id });
  res.send(UserById);
};

const deleteUser = async (req, res) => {
  let selectedUser = await User.findOne({ id: req.params.id });
  let _id = selectedUser._id;
  let deletedUser = await User.findByIdAndDelete({ _id });
};

const updateUser = async (req, res) => {
    let id = req.params.id
    let updatedUser = await User.findOneAndUpdate(
    { id: id },
    req.body
  );
};


const updateUserPutMethod = async (req,res)=>{ 
    let updatedUser = await User.replaceOne(
        {id:req.params.id}, req.body
    )
}

module.exports = { getAllUser, postUser, getUserById, deleteUser, updateUser,updateUserPutMethod };
