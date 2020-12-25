const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Topic = mongoose.model('Topic', {
    title: { type: String, required: true, unique: true },
    subtopics: { type: Schema.Types.ObjectID, ref: 'Topic' },
    tasks: { type: Array },
    status: { type: Boolean, default: false }
});

module.exports = Topic;