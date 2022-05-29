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
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

parentsSchema.virtual('kids', {
    ref: 'Kids',
    foreignField: 'parents',
    localField: '_id'
})

const Parents = mongoose.model('Parents', parentsSchema);

module.exports = Parents;