// const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, "First name is required"],
            minlength: [6, "First name must be at least 6 characters long"]
        },
        age: {
            type: Number,
            min: [1, "You must be at least 1 or older to register"],
            max: [150, "You must be at most 149 years old to register"]
        },
        email: {
            type: String,
            required: [true, "Email is required"]
        },
        drink: {
            type: String,
            Enumerator: ['Coffee', 'Tea'],
            required: function() {
                return this.age > 3;
            }
        }
    }, 
    {timestamps: true}
); 

// const User = mongoose.model("User", UserSchema);

// module.exports = User;