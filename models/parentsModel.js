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
    kids: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Kids',
        required: [true, 'Kid must have parents']
    },
    photo: {
        type: String,
        default: 'default.jpeg'
    }
})
parentsSchema.pre(/^find/, function(next) {
    this.populate({
        path: 'kids',
    });

    next();
});
const Parents = mongoose.model('Parents', parentsSchema);

module.exports = Parents;