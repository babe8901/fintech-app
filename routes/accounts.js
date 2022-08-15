const express = require('express')
const accountsRouter = express.Router()

const { getAllAccounts, getAccountById,
    createAccount, deleteAccountById, deleteAccounts,
    deactivateAccount, activateAccount } = require('../controllers/accounts')

const authMiddleware = require('../middleware/auth')

accountsRouter.route('/').get((req, res) => res.status(200).send('Accounts route'))
accountsRouter.route('/geAlltAccounts').get(getAllAccounts)
accountsRouter.route('/getAccountById').get(getAccountById)
accountsRouter.route('/createAccount').post(createAccount)
accountsRouter.route('/deleteAccountById').delete(deleteAccountById)
accountsRouter.route('/deleteAccountById').delete(deleteAccountById)
accountsRouter.route('/deactivateAccount').patch(deactivateAccount)
accountsRouter.route('/activateAccount').patch(activateAccount)

module.exports = accountsRouter