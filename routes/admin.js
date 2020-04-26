const express = require('express')
const cors = require("cors")
const pg = require('pg')
const pg_promise = require('pg-promise')
const sequelize = require('sequelize')
let SGD = require('../SGD');
let numeric = require('numeric');

const admin = express.Router()

const matrice_evaluation = require("../models/UsersEvaluation")
const matrice_evaluation_clone = require("../models/matrice_evaluation_clone")

let pool = new pg.Pool({
    user: 'postgres', 
    database : 'bdd_lieu',
    password : '1234',
    host : 'localhost',
    port : 5432,
    max : 10,
    idleTimeoutMillis : 30000
});

admin.use(cors())

admin.get('/matrice_initiale', (req, res)=>{
    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            db.query("SELECT * FROM matrice_evaluation_clone", (err, results) => {
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


admin.get('/matrice_evaluation', (req, res)=>{

    pool.connect( (err, db, done) => {
        if(err){
            return res.send(err);
        }
        else{
            matrice_evaluation.findAll({
                raw: true,
                attributes: { exclude: ['id_user'] }
              }).then(matrice=>{
                     var matrice_1 = [];
                     var i=0, j=0 ;
                      matrice.forEach(myFunction);
                      function myFunction(item, index) {
                         matrice_1[i]=[];
                         for (var key in item) {
                             var x = parseInt(item[key]);
                             matrice_1[i][j]= x ;
                             j++;
                            }
                       j=0;
                       i++;   
                   }
                   var matrice_temp = SGD(matrice_1, 12, 5000, 0.0002, 0.02)
                   console.table(matrice_temp)
                   console.table(matrice_temp.length)
            
                   //extraire les identifiants des utilisateur
                   matrice_evaluation.findAll({
                       raw:true,
                       attributes:['id_user']
                   }).then(id_utilisateur =>{
                       console.log(id_utilisateur[0].id_user)
                   
                
                   for(var users=0;users<matrice_temp.length;users++){
                        matrice_evaluation_clone.update({hotel_meridien: matrice_temp[users][0]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({hotel_sheraton: matrice_temp[users][1]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_phoenix: matrice_temp[users][2]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_les_pins_dor: matrice_temp[users][3]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_president: matrice_temp[users][4]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_beach_house: matrice_temp[users][5]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_le_petit_chez_soi: matrice_temp[users][6]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_mon_chateau: matrice_temp[users][7]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({residence_ayoun: matrice_temp[users][8]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_cherchel: matrice_temp[users][9]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_ibis: matrice_temp[users][10]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({hotel_el_yamama: matrice_temp[users][11]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_previllege: matrice_temp[users][12]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_la_colombe: matrice_temp[users][13]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({residence_gueffaz: matrice_temp[users][14]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_shems: matrice_temp[users][15]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_maghreb_el_arabi_3: matrice_temp[users][16]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_timgad: matrice_temp[users][17]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({hotel_montparnasse: matrice_temp[users][18]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_la_marquise: matrice_temp[users][19]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_pergola: matrice_temp[users][20]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({restaurant_le_titanic: matrice_temp[users][21]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_pyramides: matrice_temp[users][22]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_la_corrida: matrice_temp[users][23]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_mon_village: matrice_temp[users][24]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_martinez: matrice_temp[users][25]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_la_sirene: matrice_temp[users][26]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_le_galion: matrice_temp[users][27]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_sevilla: matrice_temp[users][28]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_croissant_dor: matrice_temp[users][29]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_miramar: matrice_temp[users][30]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({restaurant_taverne_alsacienne: matrice_temp[users][31]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restauant_lounge_le_baalabek: matrice_temp[users][32]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_saint_tropez: matrice_temp[users][33]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_le_ramier: matrice_temp[users][34]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_le_merle_blanc: matrice_temp[users][35]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({restaurant_el_faro: matrice_temp[users][36]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({cinema_murjajo: matrice_temp[users][37]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({cinem_el_marhaba: matrice_temp[users][38]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({cinema_tefna: matrice_temp[users][39]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({cinema_el_fath: matrice_temp[users][40]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({cinema_es_sadda: matrice_temp[users][41]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({cinema_maghreb: matrice_temp[users][42]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({cinematheque: matrice_temp[users][43]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({parc_dattraction_djanet_el_ahlem: matrice_temp[users][44]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({parc_aquatique_new_beach: matrice_temp[users][45]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({parc_dattraction_manege_miramar: matrice_temp[users][46]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({parc_dattraction_kiddy_garden: matrice_temp[users][47]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({parc_dattraction_sweet_city: matrice_temp[users][48]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_madegh: matrice_temp[users][49]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_cap_blanc: matrice_temp[users][50]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({plage_corales: matrice_temp[users][51]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({eden_plage: matrice_temp[users][52]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_bomo: matrice_temp[users][53]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_pinika: matrice_temp[users][54]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_la_grande: matrice_temp[users][55]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({paradis_plage: matrice_temp[users][56]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_les_dunes: matrice_temp[users][57]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_etoile: matrice_temp[users][58]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_beau_sejour: matrice_temp[users][59]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_saint_roch: matrice_temp[users][60]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({plage_el_mordjane: matrice_temp[users][61]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_saint_germain: matrice_temp[users][62]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_coste: matrice_temp[users][63]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_claire_fontaine: matrice_temp[users][64]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_el_andalous_1: matrice_temp[users][65]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({plage_el_andalous_2: matrice_temp[users][66]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_commercial_palais_dor: matrice_temp[users][67]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_commercial_ritaj: matrice_temp[users][68]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_commercial_khaouaja: matrice_temp[users][69]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_commercial_el_anik: matrice_temp[users][70]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({centre_commercial_liper_city: matrice_temp[users][71]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_commercial_ardis: matrice_temp[users][72]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_commercial_kiteal: matrice_temp[users][73]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_commenrcial_bayazit_market: matrice_temp[users][74]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({jardin_akid_lotfi: matrice_temp[users][75]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({espace_vert_entree_canastel: matrice_temp[users][76]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({jardin_publique_ain_turk: matrice_temp[users][77]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({jardin_el_othmania: matrice_temp[users][78]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({espace_vert_place_darme: matrice_temp[users][79]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({jardin_les_palmiers: matrice_temp[users][80]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({jardin_grand_terre: matrice_temp[users][81]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({jardin_yaghmorasen: matrice_temp[users][82]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({jardin_petit_bois_castors: matrice_temp[users][83]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({jardin_la_roserie: matrice_temp[users][84]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({jardin_hlm: matrice_temp[users][85]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_culturel_franþais: matrice_temp[users][86]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({palais_de_la_culture: matrice_temp[users][87]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_de_culture_pierre_claverie: matrice_temp[users][88]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_de_culture_emir_abdelkader: matrice_temp[users][89]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({centre_de_culture_ibn_mahrez: matrice_temp[users][90]}, {where : {id_user:id_utilisateur[users].id_user}});
                        matrice_evaluation_clone.update({centre_de_culture_ibntachefine: matrice_temp[users][91]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({bibliotheque_cathedrale: matrice_temp[users][92]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({bibliotheque_es_seddikia: matrice_temp[users][93]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({bibliotheque_le_petit_lecteur: matrice_temp[users][94]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({theatre_de_verdure: matrice_temp[users][95]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({theatre_regional: matrice_temp[users][96]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({musee_dart_moderne: matrice_temp[users][97]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({musee_ahmed_zabana: matrice_temp[users][98]}, {where : {id_user:id_utilisateur[users].id_user}})
                        matrice_evaluation_clone.update({musee_el_moujahid: matrice_temp[users][99]}, {where : {id_user:id_utilisateur[users].id_user}})
                                
                   }   
                   console.log('matrice updated')  
                })    
              })
            
            db.query('SELECT * FROM matrice_evaluation_clone', (err, results) => {
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
module.exports = admin