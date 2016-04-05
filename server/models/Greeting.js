var mongoose = require('mongoose');

var greetingSchema = mongoose.Schema({
    text: {
        type: String,
        required: '{PATH} is required'
    }
});

var Greeting = mongoose.model('Greeting', greetingSchema);
