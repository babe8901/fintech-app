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
    const account = await Account.findById(req.body.id)
    res.status(200).json({ account })
  } catch (error) {
    throw new CustomAPIError('Cannot get account', 201)
  }
}

const createAccount = async (req, res) => {
  try {
    const account = req.body
    const result = await Account.create(account)
    res.status(200).json({ account: result, msg: 'Account created successfully' })
  } catch (error) {
    res.status(201).json({ error })
    // throw new CustomAPIError('Some error occured. Account not created', 201)
  }
}

const updateAccountById = async (req, res) => {
  try {
    const { id } = req.body
    await Account.findByIdAndUpdate(id, req.body, { runValidators: true })
    const account = await Account.findById(id)
    res.status(200).json({ account, msg: 'Account updated successfully' })
  } catch (error) {
    res.status(201).json({ error })
    // throw new CustomAPIError('Some error occured. Account not created', 201)
  }
}

const deleteAccountById = async (req, res) => {
  try {
    const { id } = req.body
    // check if the account exists before deleting
    account = await Account.findByIdAndDelete(id)
    res.status(200).json({ account, msg: `Account with id ${id} deleted successfully` })
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

const getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id)
    res.status(200).json({ account })
  } catch (error) {
    throw new CustomAPIError('Cannot get account', 201)
  }
}

const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params
    // check if the account exists before deleting
    account = await Account.findByIdAndDelete(id)
    res.status(200).json({ account, msg: `Account with id ${id} deleted successfully` })
  } catch (error) {
    throw new CustomAPIError('Some error occured. Account not deleted', 201)
  }
}

const updateAccount = async (req, res) => {
  try {
    const { id } = req.params
    await Account.findByIdAndUpdate(id, req.body, { runValidators: true })
    const account = await Account.findById(id)
    res.status(200).json({ account, msg: 'Account updated successfully' })
  } catch (error) {
    res.status(201).json({ error })
    // throw new CustomAPIError('Some error occured. Account not created', 201)
  }
}

module.exports = {
  getAllAccounts, getAccount, getAccountById, createAccount,
  updateAccount, updateAccountById, deleteAccount,
  deleteAccounts, deleteAccountById, deactivateAccount,
  activateAccount
}