const express = require('express')
const transactionsRouter = express.Router()

const { getAllTransactions, getTransactionById,
    createTransaction, deleteTransactionById,
    deleteTransactions } = require('../controllers/transactions')

const authMiddleware = require('../middleware/auth')
const router = require('./main')

transactionsRouter.route('/').get((req, res) => res.status(200).send('Transactions router'))
transactionsRouter.route('/getAllTransactions').get(getAllTransactions)
transactionsRouter.route('/getTransactionById').get(getTransactionById)

transactionsRouter.route('/deleteTransactionById').delete(deleteTransactionById)
transactionsRouter.route('/deleteTransactions').delete(deleteTransactions)

transactionsRouter.route('/createTransaction').post(createTransaction)

module.exports = transactionsRouter