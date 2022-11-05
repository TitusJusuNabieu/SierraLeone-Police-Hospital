const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const Personnel = sequelize.define('personnel', {
  pinCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
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
  maritalStatus: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  currentAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  permanentAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false,
    validate: {
      notNull: true,
    },
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false,
    validate: {
      notNull: true,
    },
  },
  photo: {
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
  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      notNull: true,
    },
  },
  dateOfBirth: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
    validate: {
      isDate: true,
    },
  },
  dateofEnlistment: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
    validate: {
      isDate: true,
    },
  },
  dateofExit: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
    validate: {
      isDate: true,
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

module.exports = Personnel
