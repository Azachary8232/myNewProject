const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String }
    }, 
    {timestamps: true}
); 

// const User = mongoose.model("User", UserSchema);

module.exports.Person = mongoose.model('Person', PersonSchema);