const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
        username: {type: String, unique: true},
        firstName: {type: String, default: ''},
        lastName: {type: String, default: ''},
        email: {type: String, unique: true},
        password: {type: String, default: ''},
        college: {type: String, default: ''},
        stream: {type: String, default: ''},
        studentid: {type: String, default: ''},
        dob: {type: String, default: ''},
        graduationYear: {type: String, default: ''},
        github: {type: String, default: ''},
        linkedin: {type: String, default: ''},
        about: {type: String, default: ''},
        quesOne: {type: String, default: ''},
        quesTwo: {type: String, default: ''},
        quesThree: {type: String, default: ''},
        secretToken: {type: String, default: ''},
        active: {type: Boolean},
        userImage: {type: String, default: 'default.png'},
        facebook: {type: String, default: ''},
        fbTokens: Array,
        google: {type: String, default: ''}
});

userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validUserPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);