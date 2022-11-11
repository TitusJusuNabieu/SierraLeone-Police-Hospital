const Sequelize = require('sequelize')
const sequelize = require('../config/db')


const Diagnose = sequelize.define('diagnose', {
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
})



module.exports = Diagnose
