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
    parents: {
        type: mongoose.Schema.ObjectId,
        ref: 'Parents',
        required: [true, 'Kid must have parents']
    },
    photo: {
        type: String,
        default: 'default.jpeg'
    }
})
kidsSchema.pre(/^find/, function(next) {
    this.populate({
        path: 'parents',
    });

    next();
});

const Kids = mongoose.model('Kids', kidsSchema);

module.exports = Kids;