const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  inProgress: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  inProgressAt: {
    type: Date,
  },
  completedAt: {
    type: Date,
  },
});

module.exports = mongoose.model('ToDo', toDoSchema);
