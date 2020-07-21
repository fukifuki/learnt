const mongoose = require('mongoose');

const Greeting = mongoose.model('Greeting', {
    name: {
        type: String,
        default: 'Iskra'
    }
});

module.exports = Greeting;