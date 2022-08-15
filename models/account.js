const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    number: {
        type: String,
        required: [true, 'PLease provide an account number']
    },
    type: {
        type: String,
        required: [true, 'Please provide an account type']
    },
    user: {
        type: String,
        required: [true, 'Please provide an account user']
    },
    balance: {
        type: mongoose.Decimal128,
        default: 0.0
    },
    status: {
        type: Boolean,
        default: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Accounts', accountSchema)