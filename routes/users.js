const express = require('express')
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const UserEvaluation = require('../models/UsersEvaluation')
const matrice_evaluation_clone = require("../models/matrice_evaluation_clone")


const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'


// inscription
users.post("/register", (req, res) => {
   const userData ={
      nomutilisateur : req.body.nomutilisateur,
      email : req.body.email,
      mot_de_passe : req.body.mot_de_passe
   }

  
   //verifier si le nom d'utilisateur est unique
   User.findOne({
      where : {
         nomutilisateur : req.body.nomutilisateur
      }
   })
   .then(user => {
      if(!user){
         bcrypt.hash(req.body.mot_de_passe, 10, (err, hash) => {
            userData.mot_de_passe = hash

            console.log(userData.email)

            //Ajouter un nouveau utilisateur a la table utilisateur 
            User.create(userData)
            .then(user => {
               //res.json({status : user.nomutilisateur + ' inscrit correctement'})
               let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                  expiresIn: 1440
               })
               res.send(token)
            })
            .catch(err => {
               res.send('error: ' + err)
            })
         })
      }else{
         res.json({errorrrrrr :'cet utilisateur existe deja !'})
      }
   })
   .catch(err => {
      res.send('error :' + err)
   })
})

//connexion
users.post('/login', (req, res) => {
   User.findOne({
      where : {
         nomutilisateur : req.body.nomutilisateur
      }
   })
   .then(user => {
      if(user){
         if(bcrypt.compareSync(req.body.mot_de_passe, user.mot_de_passe)){
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
               expiresIn: 1440
            })
            res.send(token)
         }
      }else{
         res.status(400).json({error:' utilisateur inexistant'})
      }
   })
   .catch(err => {
      res.status(400).json({error : err})
   })
})

//creer profil 
users.get('/creerprofil', (req, res) => {
   const id_user = parseInt(req.query.id_user);
   console.log(id_user)

   const userEvaluationData ={
      hotel_meridien : 0,
      hotel_sheraton :0,
      hotel_phoenix :0,
      hotel_les_pins_dor :0,
      hotel_president :0,
      hotel_beach_house :0,
      hotel_le_petit_chez_soi :0,
      hotel_mon_chateau :0,
      residence_ayoun :0,
      hotel_cherchel :0,
      hotel_ibis :0, 
      hotel_el_yamama :0,                                                                                                       
      hotel_previllege :0,                                                    
      hotel_la_colombe :0,
      residence_gueffaz :0,                                                    
      hotel_shems :0, 
      hotel_maghreb_el_arabi_3 :0, 
      hotel_timgad :0,
      hotel_montparnasse :0,
      restaurant_la_marquise :0,                                                                                                                       
      restaurant_pergola :0,                                                               
      restaurant_le_titanic :0,
      restaurant_pyramides :0,  
      restaurant_la_corrida :0,
      restaurant_mon_village :0,  
      restaurant_martinez :0,  
      restaurant_la_sirene :0,
      restaurant_le_galion :0, 
      restaurant_sevilla :0,
      restaurant_croissant_dor :0,
      restaurant_miramar :0,
      restaurant_taverne_alsacienne :0,
      restauant_lounge_le_baalabek :0,
      restaurant_saint_tropez :0,
      restaurant_le_ramier :0,
      restaurant_le_merle_blanc :0,
      restaurant_el_faro :0,
      cinema_murjajo :0,
      cinem_el_marhaba :0,
      cinema_tefna :0,
      cinema_el_fath :0, 
      cinema_es_sadda :0, 
      cinema_maghreb :0, 
      cinematheque :0,       
      parc_dattraction_djanet_el_ahlem :0,       
      parc_aquatique_new_beach :0,       
      parc_dattraction_manege_miramar :0,
      parc_dattraction_kiddy_garden :0,
      parc_dattraction_sweet_city :0,
      plage_madegh :0,
      plage_cap_blanc :0,
      plage_corales :0,
      eden_plage :0,          
      plage_bomo :0,          
      plage_pinika :0,          
      plage_la_grande :0,          
      paradis_plage :0,
      plage_les_dunes :0,
      plage_etoile :0,
      plage_beau_sejour :0, 
      plage_saint_roch :0, 
      plage_el_mordjane :0, 
      plage_saint_germain :0, 
      plage_coste :0, 
      plage_claire_fontaine :0, 
      plage_el_andalous_1 :0, 
      plage_el_andalous_2 :0, 
      centre_commercial_palais_dor :0, 
      centre_commercial_ritaj :0, 
      centre_commercial_khaouaja :0, 
      centre_commercial_el_anik :0, 
      centre_commercial_liper_city :0,
      centre_commercial_ardis :0,
      centre_commercial_kiteal :0,
      centre_commenrcial_bayazit_market :0,
      jardin_akid_lotfi :0,
      espace_vert_entree_canastel :0,
      jardin_publique_ain_turk :0,
      jardin_el_othmania :0,
      espace_vert_place_darme :0,
      jardin_les_palmiers :0,
      jardin_grand_terre :0,
      jardin_yaghmorasen :0,
      jardin_petit_bois_castors :0,
      jardin_la_roserie :0,
      jardin_hlm :0,
      centre_culturel_franþais :0,
      palais_de_la_culture :0,
      centre_de_culture_pierre_claverie :0,
      centre_de_culture_emir_abdelkader :0, 
      centre_de_culture_ibn_mahrez :0, 
      centre_de_culture_ibntachefine :0, 
      bibliotheque_cathedrale :0,
      bibliotheque_es_seddikia :0,
      bibliotheque_le_petit_lecteur :0,
      theatre_de_verdure :0,
      theatre_regional :0,
      musee_dart_moderne :0,
      musee_ahmed_zabana :0,
      musee_el_moujahid :0,
      id_user :id_user,
    }
 
   UserEvaluation.create(userEvaluationData)
   matrice_evaluation_clone.create(userEvaluationData)

}) 

module.exports = users




