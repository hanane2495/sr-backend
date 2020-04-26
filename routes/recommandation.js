const express = require('express')
const cors = require("cors")
const pg = require('pg')
const pg_promise = require('pg-promise')
const sequelize = require('sequelize')
const Op = sequelize.Op;

const recommandation = express.Router()


let pool = new pg.Pool({
    user: 'postgres', 
    database : 'bdd_lieu',
    password : '1234',
    host : 'localhost',
    port : 5432,
    max : 10,
    idleTimeoutMillis : 30000
});

recommandation.use(cors())

//models
const correspondance_lieu = require('../models/correspondance')
const lieu_interet = require('../models/lieu_interet')

//associations
lieu_interet.hasOne(correspondance_lieu, {foreignKey: 'id_lieu'})
correspondance_lieu.belongsTo(lieu_interet, {foreignKey: 'id_lieu'})


recommandation.get('/lieux', (req, res) => {
   
    pool.connect((err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            //recuperer les indices des meilleurs lieux
            const id_user = parseInt(req.query.id_user);
            var indices =[];
              db.query('SELECT * FROM matrice_evaluation_clone where id_user = $1',[id_user] ,(err, results) => {
                       var lieux = [];
                       var object=results.rows[0];
                       Object.keys(object).map(function(objectKey, index) {
                           var value = object[objectKey];
                           lieux.push(value)
                        });
                        for(var i=0;i<99;i++){
                             if(lieux[i]>=3){
                                 indices.push(i);
                                }
                            }
                        //console.log(indices);


                        //recuperer les id des lieux via sequelize
                        correspondance_lieu.findAll({
                            attributes:['id_lieu'],
                            where:{ index_lieu :{[ Op.in ]:indices}},
                            raw : true
                        }).then(results => {
                            var id_lieu = []
                            var j=0;
                            for( item in results){
                                id_lieu.push(results[j].id_lieu);
                                j++;
                            }
                            //console.log(id_lieu);

                            //recuperer les informations des lieux via sequelize
                            lieu_interet.findAll({
                                where:{ idlieu :{[ Op.in ]:id_lieu}},
                                raw : true
                            }).then(results1 =>{
                                console.log(results1)

                                return res.send(results1) 
                               
                            })


                        }).catch(err => {
                            console.log(err);
                        })
                    })
                }
            })

})
module.exports = recommandation