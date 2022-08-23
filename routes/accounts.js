const express = require('express')
const accountsRouter = express.Router()

const { getAllAccounts, getAccount, getAccountById,
    updateAccount, updateAccountById, deleteAccount,
    createAccount, deleteAccountById, deleteAccounts,
    deactivateAccount, activateAccount } = require('../controllers/accounts')

const authMiddleware = require('../middleware/auth')

// accountsRouter.route('/').get((req, res) => res.status(200).json({ msg: 'Accounts route' }))
accountsRouter.route('/getAllAccounts').get(getAllAccounts)
accountsRouter.route('/getAccountById').get(getAccountById)

accountsRouter.route('/createAccount').post(createAccount)

accountsRouter.route('/deleteAccountById').delete(deleteAccountById)
accountsRouter.route('/deleteAccounts').delete(deleteAccounts)

accountsRouter.route('/updateAccountById').patch(updateAccountById)
accountsRouter.route('/deactivateAccount').patch(deactivateAccount)
accountsRouter.route('/activateAccount').patch(activateAccount)

accountsRouter.route('/').get(getAllAccounts).post(createAccount).delete(deleteAccounts)
accountsRouter.route('/:id').get(getAccount).patch(updateAccount).delete(deleteAccount)

module.exports = accountsRouter