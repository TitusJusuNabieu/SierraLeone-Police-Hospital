const _ = require('lodash')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')
const User = require('../model/user')

exports.login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ data: 'please fill login form' })
    }

    let user = await User.findAll({
      where: {
        email: req.body.email,
      },
    })

    if (user.length === 0) {
      return res
        .status(400)
        .json({ data: 'Please enter a valid Username or Password' })
    }

    const userPassword = user[0].dataValues.password

    const validPassword = await bcrypt.compare(req.body.password, userPassword)

    if (!validPassword) {
      return res
        .status(400)
        .json({ data: 'Please enter a valid Username or Password' })
    }

    user = _.pick(user[0].dataValues, [
      'id',
      'email',
      'password',
      'firstName',
      'lastName',
      'phone',
      'department',
      'designation',
      'role',
    ])

    const token = jwt.sign({ user: user }, process.env.JWT)
    res.json({ token: token })
  } catch (e) {
    res.json({
      message: e.message || 'Some error occurred while creating the User.',
    })
  }
}
