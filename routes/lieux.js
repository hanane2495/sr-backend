const express = require('express')
const cors = require("cors")
const pg = require('pg')
const pg_promise = require('pg-promise')

const lieux = express.Router()

const SELECT_ALL_HOTELS_QUERY = 'SELECT * FROM hotel';
const SELECT_ALL_RESTAURANTS_QUERY = 'SELECT * FROM restaurant';
const SELECT_ALL_PLAGES_QUERY = 'SELECT * FROM plage';
const SELECT_ALL_CENTRES_COMM_QUERY = 'SELECT * FROM centre_commercial';
const SELECT_ALL_CINEMAS_QUERY = 'SELECT * FROM cinema';
const SELECT_ALL_PARC_ATTRACTION_QUERY = 'SELECT * FROM parc_attraction';
const SELECT_ALL_ESPACES_VERTS_QUERY = 'SELECT * FROM espace_vert';
const SELECT_ALL_BIBLIOTHEQUES_QUERY = 'SELECT * FROM bibliotheque';
const SELECT_ALL_MUSEES_QUERY = 'SELECT * FROM musee';
const SELECT_ALL_CENTRES_CULTURELS_QUERY = 'SELECT * FROM centre_culturel';
const SELECT_ALL_THEATRES_QUERY = 'SELECT * FROM theatre';
const SELECT_SUGGESTION_QUERY = 'SELECT * FROM lieu_interet, correspondance_lieu where lieu_interet.idlieu = correspondance_lieu.id_lieu';

let pool = new pg.Pool({
    user: 'postgres', 
    database : 'bdd_lieu',
    password : '1234',
    host : 'localhost',
    port : 5432,
    max : 10,
    idleTimeoutMillis : 30000
});

lieux.use(cors())

// recuperation de tous les hotels
lieux.get('/hotels', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_HOTELS_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les restaurants
lieux.get('/restaurants', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_RESTAURANTS_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les plages
lieux.get('/plages', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_PLAGES_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les centre commerciaux
lieux.get('/centre_commerciaux', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_CENTRES_COMM_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les cinemas
lieux.get('/cinemas', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_CINEMAS_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les parcs attractions
lieux.get('/parcs_attraction', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_PARC_ATTRACTION_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les espaces verts
lieux.get('/espaces_verts', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_ESPACES_VERTS_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les bibliotheques
lieux.get('/bibliotheques', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_BIBLIOTHEQUES_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les musees
lieux.get('/musees', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_MUSEES_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les centres_culturels
lieux.get('/centres_culturels', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_CENTRES_CULTURELS_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

// recuperation de tous les theatres
lieux.get('/theatres', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_ALL_THEATRES_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

//recuperation de toutes les suggestions
lieux.get('/suggestions', (req, res) => {
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query(SELECT_SUGGESTION_QUERY, (err, results) => {
                if(err){
                    return res.send(err)
                }
                else{
                    return res.json({
                        data: results
                    })
                }
            })
        }
    })
})

const UserEvaluation = require('../models/UsersEvaluation')
const UserEvaluation_clone = require('../models/matrice_evaluation_clone')
//recuperation des evaluation et mise a jour profile utilisateur 
lieux.get('/suggestions/evaluation', (req, res) => { 
    const {id_user, nomlieu, rating} = req.query
    console.log(id_user+" "+ nomlieu+' '+ rating)
    const update_profile = {};
    update_profile[nomlieu] = rating;
    console.log(update_profile)
    
    UserEvaluation.update(update_profile, {where : {id_user:id_user}}).then(() => {
        res.status(200).json({
            message: "profile modifiee!",
               })
            }).catch(err => {
             res.json({
             err
                })
            })

    UserEvaluation_clone.update(update_profile, {where : {id_user:id_user}}).then(() => {
        res.status(200).json({
            message: "profile modifiee!",
            })
        }).catch(err => {
            res.json({
                err
            })
        })           
})


//feedback
lieux.get('/feedback', (req, res) => { 
    const {id_user, nomlieu, rating} = req.query
    console.log(id_user+" "+ nomlieu+' '+ rating)
    const update_profile = {};
    update_profile[nomlieu] = rating;
    console.log(update_profile)
    
    UserEvaluation.update(update_profile, {where : {id_user:id_user}}).then(() => {
        console.log('feedback effectuee')
            }).catch(err => {
             res.json({
             err
                })
            })

    UserEvaluation_clone.update(update_profile, {where : {id_user:id_user}}).then(() => {
        res.status(200).json({
            message: "profile modifiee!",
            })
        }).catch(err => {
            res.json({
                err
            })
        })           
})



module.exports = lieux