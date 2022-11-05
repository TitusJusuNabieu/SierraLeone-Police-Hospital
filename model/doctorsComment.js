const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const User = require("./user")
const Diagnosis = require("./diagnosis") 

const DoctorsComment = sequelize.define('doctorscomment', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  commentBody: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },

  attachment: {
    type: Sequelize.STRING,
    allowNull: false,
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

DoctorsComment.belongsTo(Diagnosis)
DoctorsComment.belongsTo(User)

module.exports = DoctorsComment
