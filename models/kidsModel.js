const mongoose = require('mongoose')

const kidsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'This name field can\'t be blank']
    },
    age: {
        type: Number,
        required: [true, 'This age field can\'t be blank']
    },

    photo: {
        type: String,
        default: 'default.jpeg'
    }
})

const Kids = mongoose.model('Kids', kidsSchema);

module.exports = Kids;