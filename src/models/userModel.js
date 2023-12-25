const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: Number,
    username: String,
    surname: String,
    email: String,
    password: String,
    isPublic: Boolean,
    posts:[
      {imgID:Number,
        imgSRC:String,
      title:String}
    ],
    followers: Array,
    following:Array,
    blockList:Array,
    stories:Array,
    notifications:Array,
    bio:{
      info:String,
      country:String
    },
    isAdmin: Boolean
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;
