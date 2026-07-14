const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
   email: {
     required: true,
     unique: true,
     type: String,
   },
   name: {
     required: true,
     type: String
   },
   password: {
     required: false,
     type: String
   },
   authSource: {
     enum: ["self", "google"],
     default: "self",
     type: String
   },
   tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'task'
        }
    ]
 });

const User = mongoose.model("user", UserSchema);

module.exports = User;