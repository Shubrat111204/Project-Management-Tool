const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: 'In Progress',
  },
  progress: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);