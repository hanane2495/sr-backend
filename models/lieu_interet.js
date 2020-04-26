//SELECT * FROM lieu_interet, correspondance_lieu where lieu_interet.idlieu = correspondance_lieu.id_lieu and index_lieu in (1,2,3,4,5,6,7,8,9,10,11)


const Sequelize = require('sequelize');
const db = require('../database/db');


module.exports = db.sequelize.define(
    'lieu_interet',
    {
        idlieu:{
            type: Sequelize.INTEGER,
            primaryKey : true
        },
       nomlieu:{
           type: Sequelize.STRING
       },
       categorie:{
           type: Sequelize.STRING
       },
       adresse:{
           type: Sequelize.STRING
       },
       telephone:{
        type: Sequelize.STRING
       },
       latitude:{
        type: Sequelize.REAL
       },   
       longitude:{
        type: Sequelize.REAL
       }                  
    },{
        timestamps: false,
        freezeTableName: true
      })