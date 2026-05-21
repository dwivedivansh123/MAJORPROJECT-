const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default || require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

console.log("DEBUG: ", typeof passportLocalMongoose); // Ye 'function' aana chahiye

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);


// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true
//     }
// });

// // 1. Add the plugin to the schema
// // This automatically adds 'username' and 'password' fields
// userSchema.plugin(passportLocalMongoose);

// // 2. Export the model
// module.exports = mongoose.model("User", userSchema);