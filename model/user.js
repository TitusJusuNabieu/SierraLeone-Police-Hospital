const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const DoctorsComment = require("../model/doctorsComment")
// const User = require("./user")
const Diagnosis = require("./diagnosis")
const Personnel = require("./Personnel")
const Dependant = require("./dependant")

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notNull: true,
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },

  designation: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false,
    validate: {
      notNull: true,
    },
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false,
    validate: {
      notNull: true,
    },
  },
  date: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
    validate: {
      isDate: true,
    },
  },
})
User.hasMany(DoctorsComment)
Personnel.hasMany(Dependant,{foreignKey:'pinCode'})
Personnel.hasMany(Diagnosis,{foreignKey:'pinCode'})
Dependant.belongsTo(Personnel,{foreignKey:{name:'pinCode',allowNull:false}})
Dependant.hasMany(Diagnosis)
Diagnosis.belongsTo(Personnel,{foreignKey:'pinCode'})
Diagnosis.belongsTo(Dependant)
Diagnosis.hasMany(DoctorsComment)
DoctorsComment.belongsTo(Diagnosis)
DoctorsComment.belongsTo(User,{foreignKey:{
  allowNull:false
}})

module.exports = User

