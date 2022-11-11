const Sequelize = require('sequelize')
const sequelize = require('../config/db')


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
  }
})



module.exports = DoctorsComment
