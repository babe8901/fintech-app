const express = require('express')
usersRouter = express.Router()

const { getAllUsers, getUser, getUserById, createUser,
    updateUser, updateUserById, deleteUser,
    deleteAllUsers, deleteUserById } = require('../controllers/users')

const authenticationMiddleware = require('../middleware/auth')

// usersRouter.route('/').get((req, res) => res.status(200).json({ msg: 'users router' }))
usersRouter.route('/getAllUsers').get(getAllUsers)
usersRouter.route('/getUserById').get(getUserById)

usersRouter.route('/createUser').post(createUser)

usersRouter.route('/updateUserById').patch(updateUserById)

usersRouter.route('/deleteAllUsers').delete(deleteAllUsers)
usersRouter.route('/deleteUserById').delete(deleteUserById)

usersRouter.route('/').get(getAllUsers).post(createUser).delete(deleteAllUsers)
usersRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

module.exports = usersRouter