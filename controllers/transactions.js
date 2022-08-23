const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')
const Transaction = require('../models/transaction')

const getAllTransactions = async (req, res) => {
    try {
        transactions = await Transaction.find({})
        res.status(200).json({ transactions, nbHits: transactions.length })
    } catch (error) {
        throw new CustomAPIError('Cannot retrieve all transactions', 201)
    }
}

const getTransactionById = async (req, res) => {
    try {
        transaction = await Transaction.findById(req.body.id)
        res.status(200).json({ transaction })
    } catch (error) {
        throw new CustomAPIError('Cannot retrieve transaction', 201)
    }
}

const createTransaction = async (req, res) => {
    try {
        transactions = await Transaction.create(req.body)
        res.status(200).json({ transactions, nbHits: transactions.length })
    } catch (error) {
        res.status(201).json({ error })
        // throw new CustomAPIError('Cannot create transaction', 201)
    }
}

const deleteTransactionById = async (req, res) => {
    try {
        const id = req.body.id
        transation = await Transaction.findByIdAndDelete(id)
        res.status(200).json({ transaction, msg: `transaction ${id} deleted successfully` })
    } catch (error) {
        throw new CustomAPIError('Cannot delete transaction', 201)
    }
}

const deleteTransactions = async (req, res) => {
    try {
        transactions = await Transaction.deleteMany({})
        res.status(200).json({ transactions, msg: 'All transactions deleted successfully' })
    } catch (error) {
        throw new CustomAPIError('Cannot delete transaction', 201)
    }
}


const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params
        transation = await Transaction.findByIdAndDelete(id)
        res.status(200).json({ transaction, msg: `transaction ${id} deleted successfully` })
    } catch (error) {
        throw new CustomAPIError('Cannot delete transaction', 201)
    }
}

const getTransaction = async (req, res) => {
    try {
        transaction = await Transaction.findById(req.params.id)
        res.status(200).json({ transaction })
    } catch (error) {
        throw new CustomAPIError('Cannot retrieve transaction', 201)
    }
}

const updateTransaction = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        await Transaction.findByIdAndUpdate(id, req.body, { runValidators: true })
        transaction = await Transaction.findById(id)
        res.status(200).json({ transaction })
    } catch (error) {
        throw new CustomAPIError('Cannot update transaction', 201)
    }
}

module.exports = {
    getAllTransactions, getTransaction, getTransactionById, createTransaction,
    updateTransaction, deleteTransaction, deleteTransactions, deleteTransactionById
}