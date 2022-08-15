const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Please provide first name']
  },
  last_name: {
    type: String,
    required: [true, 'Please provide last name']
  },
  middle_name: {
    type: String,
  },
  DOB: {
    type: Date,
    required: [true, 'Please provide aadhar id']
  },
  gender: {
    type: String,
    default: 'Do not want to specify'
  },
  mobile_no: {
    type: String,
    required: [true, 'Please provide mobile number']
  },
  email: {
    type: String,
    required: [true, 'Please provide email id']
  },
  aadhar_id: {
    type: String,
    required: [true, 'Please provide aadhar id']
  },
  pan_id: {
    type: String,
    required: [true, 'Please provide pan id']
  },
  passport_id: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Please provide password']
  },
  accounts: {
    type: [String]
  },
  status: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Users', userSchema)