const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    res.status(200).send("hello world")
    const { username, password } = req.body

    if (!username || !password) {
        throw new CustomAPIError('please provide email and password', 400)
    }

}

const register = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        throw new CustomAPIError('please provide email and password', 400)
    }


}

const dashboard = async (req, res) => {

}

module.exports = { login, register, dashboard }