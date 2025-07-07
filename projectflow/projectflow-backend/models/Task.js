const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  project: {
    type: String, // Can later use ref to 'Project'
    required: true,
  },
  assignee: String,
  priority: {
    type: String,
    enum: ['HIGH', 'MEDIUM', 'LOW'],
    default: 'MEDIUM',
  },
  status: {
    type: String,
    default: 'Pending',
  },
});

module.exports = mongoose.model('Task', TaskSchema);