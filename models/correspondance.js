const Sequelize = require('sequelize');
const db = require('../database/db');


module.exports = db.sequelize.define(
    'correspondance_lieu',
    {
        index_lieu:{
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
       nomlieu:{
           type: Sequelize.STRING
       },
       id_lieu:{
           type: Sequelize.INTEGER
       }    
    },{
        timestamps: false,
        freezeTableName: true
      })