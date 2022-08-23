const express = require('express')
const transactionsRouter = express.Router()

const { getAllTransactions, getTransaction, getTransactionById,
    createTransaction, deleteTransaction, deleteTransactionById,
    deleteTransactions,
    updateTransaction } = require('../controllers/transactions')

const authMiddleware = require('../middleware/auth')

// transactionsRouter.route('/').get((req, res) => res.status(200).json({ msg: 'Transactions router' }))
transactionsRouter.route('/getAllTransactions').get(getAllTransactions)
transactionsRouter.route('/getTransactionById').get(getTransactionById)
transactionsRouter.route('/getTransactionById').get(getTransactionById)

transactionsRouter.route('/deleteTransactionById').delete(deleteTransactionById)
transactionsRouter.route('/deleteTransactions').delete(deleteTransactions)

transactionsRouter.route('/createTransaction').post(createTransaction)

transactionsRouter.route('/:id').get(getTransaction).patch(updateTransaction).delete(deleteTransaction)
transactionsRouter.route('/').get(getAllTransactions).post(createTransaction).delete(deleteTransactions)

module.exports = transactionsRouter