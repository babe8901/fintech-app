const express = require('express')
const accountsRouter = express.Router()

const { getAllAccounts, getAccountById,
    createAccount, deleteAccount,
    deactivateAccount, activateAccount } = require('../controllers/accounts')

const authMiddleware = require('../middleware/auth')

accountsRouter.route('/').get((req, res) => res.send('hello'))
accountsRouter.route('/geAlltAccounts').get(getAllAccounts)
accountsRouter.route('/getAccountById').get(getAccountById)
accountsRouter.route('/createAccount').post(createAccount)
accountsRouter.route('/deleteAccount').post(deleteAccount)
accountsRouter.route('/deactivateAccount').post(deactivateAccount)
accountsRouter.route('/activateAccount').post(activateAccount)

module.exports = accountsRouter