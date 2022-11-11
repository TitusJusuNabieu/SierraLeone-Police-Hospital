const _ = require('lodash')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/user')

// creat User record
exports.create = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).json({ data: 'please fill user form' })
    }

    let user = await User.findAll({
      where: {
        email: req.body.email,
      },
    })

    if (user.length !== 0) {
      return res.status(400).json({ data: 'User already registered' })
    }

    user = _.pick(req.body, [
      'email',
      'password',
      'firstName',
      'lastName',
      'phone',
      'department',
      'designation',
      'role',
    ])

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    const usr = await User.create(user)
    const token = jwt.sign({ user: user }, process.env.JWT)

    res.header('x-auth-token', token).status(200).json({
      data: usr,
    })
  } catch (e) {
    res.json({
      message: e.message || 'Some error occurred while creating the User.',
    })
  }
}
// Access User profile.
exports.me = async (req, res) => {
  try {
    const usr = await User.findAll({ where: { id: req.user.user.id } })
    res.status(200).json({
      data: _.pick(usr[0].dataValues, [
        'email',
      'password',
      'firstName',
      'lastName',
      'phone',
      'designation',
      'role',
      ]),
    })
  } catch (e) {
    res.json({
      message: e.message || 'Some error occurred while creating the User.',
    })
  }
}

// Update a User profile 
exports.update = async(req, res) => {
  try{
      const _id = req.params.id;
     const usr = await User.update( req.body,
      { where: { id: _id } })
      res.status(200).json(diag==0?{message:`User not found`}:{message:`User Profile was updated succesfully`})
  }catch(e){
      res.json({ message:
          e.message || "Some occurred while updating user profile"})
  }
};