const Sequelize = require('sequelize')
const sequelize = require('../config/db')


const Diagnosis = sequelize.define('diagnosis', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Diagnosistype: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },

  disease: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  disposalOfCase: {
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



module.exports = Diagnosis
