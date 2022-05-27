const mongoose = require('mongoose')

const parentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'This field can\'t be blank']
    },
    age: {
        type: Number,
        required: [true, 'This field can\'t be blank']
    },
    photo: {
        type: String,
        default: 'default.jpeg'
    }
})

const Parents = mongoose.model('Parents', parentsSchema);

module.exports = Parents;