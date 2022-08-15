const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')
const Account = require('../models/account')

const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({})
    res.status(200).json({ accounts, nbHits: accounts.length })
  } catch (error) {
    throw new CustomAPIError('Cannot get all accounts')
  }
}

const getAccountById = async (req, res) => {
  try {
    const account = await Account.find({ _id: req.body.id })
    res.status(200).json({ account })
  } catch (error) {
    throw new CustomAPIError('Cannot get account', 201)
  }
}

const createAccount = async (req, res) => {
  try {
    const account = req.body
    const res = await Account.create(account)
    res.status(200).json({ account: res, msg: 'Account created successfully' })
  } catch (error) {
    throw new CustomAPIError('Some error occured. Account not created', 201)
  }
}

const deleteAccountById = async (req, res) => {
  try {
    const { id } = req.body
    await Account.findByIdAndDelete(id)
    res.status(200).json({ msg: `Account with id ${id} deleted successfully` })
  } catch (error) {
    throw new CustomAPIError('Some error occured. Account not deleted', 201)
  }
}

const deleteAccounts = async (req, res) => {
  try {
    await Account.deleteMany({})
    res.status(200).json({ msg: `Accounts deleted successfully` })
  } catch (error) {
    throw new CustomAPIError('Some error occured. Account not deleted', 201)
  }
}

const deactivateAccount = async (req, res) => {
  try {
    const { id } = req.body
    await Account.updateOne({ _id: id }, { status: false })
    res.status(200).json({ msg: `Account with id ${id} deactivated successfully` })
  } catch (error) {
    throw new CustomAPIError('Some error occured. Account not deactivated', 201)
  }
}

const activateAccount = async (req, res) => {
  try {
    const { id } = req.body
    await Account.updateOne({ _id: id }, { status: true })
    res.status(200).json({ msg: `Account with id ${id} activated successfully` })
  } catch (error) {
    throw new CustomAPIError('Some error occured. Account not activated', 201)
  }
}

module.exports = {
  getAllAccounts, getAccountById, createAccount,
  deleteAccounts, deleteAccountById, deactivateAccount,
  activateAccount
}