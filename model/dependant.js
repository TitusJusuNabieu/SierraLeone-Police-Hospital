const Sequelize = require('sequelize')
const sequelize = require("../config/db");

const Dependant = sequelize.define("dependant",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notNull: true
        }
    },
    lastName:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notNull: true
        }
    },
    gender:{
        type:Sequelize.STRING,
        
    },
    currentAddress:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notNull: true
        }
    },
    dateOfBirth: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        validate: {
          isDate: true,
        },
      },
   permanentAddress:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notNull: true
        }
    },
    relationship:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notNull: true
        }
    },
    phoneNumber:{
        type:Sequelize.STRING,
        
    },
    documentOfProof:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notNull: true
        }
    },
    picture:{
        type:Sequelize.STRING,
        
    }

});



module.exports = Dependant