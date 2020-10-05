const { Schema, models, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = models.User || model('User', UserSchema);
