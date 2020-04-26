const Sequelize = require('sequelize');
const db = require('../database/db');


module.exports = db.sequelize.define(
    'utilisateur',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
       nomutilisateur:{
           type: Sequelize.STRING
       },
       email:{
           type: Sequelize.STRING
       },
       mot_de_passe:{
           type: Sequelize.STRING
       }       
    },{
        timestamps: false,
        freezeTableName: true
      })