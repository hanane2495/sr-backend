const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'matrice_evaluation',
    {
        hotel_meridien :{
           type: Sequelize.REAL
       },
       hotel_sheraton :{
        type: Sequelize.REAL
       },
       hotel_phoenix :{
        type: Sequelize.REAL
       },
       hotel_les_pins_dor :{
        type: Sequelize.REAL
       },
       hotel_president :{
        type: Sequelize.REAL
       },
       hotel_beach_house :{
        type: Sequelize.REAL
       },
       hotel_le_petit_chez_soi :{
        type: Sequelize.REAL
       },
       hotel_mon_chateau :{
        type: Sequelize.REAL
       },
       residence_ayoun :{
        type: Sequelize.REAL
       },
       hotel_cherchel :{
        type: Sequelize.REAL
       },
       hotel_ibis :{
        type: Sequelize.REAL
       }, 
       hotel_el_yamama :{
        type: Sequelize.REAL
       },                                                                                                       
       hotel_previllege :{
        type: Sequelize.REAL
       },                                                    
       hotel_la_colombe :{
        type: Sequelize.REAL
       }, 
       residence_gueffaz :{
        type: Sequelize.REAL
       },                                                    
       hotel_shems :{
        type: Sequelize.REAL
       }, 
       hotel_maghreb_el_arabi_3 :{
        type: Sequelize.REAL
       }, 
       hotel_timgad :{
        type: Sequelize.REAL
       },
       hotel_montparnasse :{
        type: Sequelize.REAL
       },
       restaurant_la_marquise :{
        type: Sequelize.REAL
       },                                                                                                                       
       restaurant_pergola :{
        type: Sequelize.REAL
       },                                                               
       restaurant_le_titanic :{
        type: Sequelize.REAL
       },
       restaurant_pyramides :{
        type: Sequelize.REAL
       },  
       restaurant_la_corrida :{
        type: Sequelize.REAL
       },
       restaurant_mon_village :{
        type: Sequelize.REAL
       },  
       restaurant_martinez :{
        type: Sequelize.REAL
       },  
       restaurant_la_sirene :{
        type: Sequelize.REAL
       },
       restaurant_le_galion :{
        type: Sequelize.REAL
       }, 
       restaurant_sevilla :{
        type: Sequelize.REAL
       },
       restaurant_croissant_dor :{
        type: Sequelize.REAL
       },
       restaurant_miramar :{
        type: Sequelize.REAL
       },
       restaurant_taverne_alsacienne :{
        type: Sequelize.REAL
       },
       restauant_lounge_le_baalabek :{
        type: Sequelize.REAL
       },
       restaurant_saint_tropez :{
        type: Sequelize.REAL
       },
       restaurant_le_ramier :{
        type: Sequelize.REAL
       },
       restaurant_le_merle_blanc :{
        type: Sequelize.REAL
       },
       restaurant_el_faro :{
        type: Sequelize.REAL
       },
       cinema_murjajo :{
        type: Sequelize.REAL
       },
       cinem_el_marhaba :{
        type: Sequelize.REAL
       },
       cinema_tefna :{
        type: Sequelize.REAL
       },
       cinema_el_fath :{
        type: Sequelize.REAL
       }, 
       cinema_es_sadda :{
        type: Sequelize.REAL
       }, 
       cinema_maghreb :{
        type: Sequelize.REAL
       }, 
       cinematheque :{
        type: Sequelize.REAL
       },       
       parc_dattraction_djanet_el_ahlem :{
        type: Sequelize.REAL
       },       
       parc_aquatique_new_beach :{
        type: Sequelize.REAL
       },       
       parc_dattraction_manege_miramar :{
        type: Sequelize.REAL
       },
       parc_dattraction_kiddy_garden :{
        type: Sequelize.REAL
       },
       parc_dattraction_sweet_city :{
        type: Sequelize.REAL
       },
       plage_madegh :{
        type: Sequelize.REAL
       },
       plage_cap_blanc :{
        type: Sequelize.REAL
       },
       plage_corales :{
        type: Sequelize.REAL
       },
       eden_plage :{
        type: Sequelize.REAL
       },          
       plage_bomo :{
        type: Sequelize.REAL
       },          
       plage_pinika :{
        type: Sequelize.REAL
       },          
       plage_la_grande :{
        type: Sequelize.REAL
       },          
       paradis_plage :{
        type: Sequelize.REAL
       },
       plage_les_dunes :{
        type: Sequelize.REAL
       },
       plage_etoile :{
        type: Sequelize.REAL
       },
       plage_beau_sejour :{
        type: Sequelize.REAL
       }, 
       plage_saint_roch :{
        type: Sequelize.REAL
       }, 
       plage_el_mordjane :{
        type: Sequelize.REAL
       }, 
       plage_saint_germain :{
        type: Sequelize.REAL
       }, 
       plage_coste :{
        type: Sequelize.REAL
       }, 
       plage_claire_fontaine :{
        type: Sequelize.REAL
       }, 
       plage_el_andalous_1 :{
        type: Sequelize.REAL
       }, 
       plage_el_andalous_2 :{
        type: Sequelize.REAL
       }, 
       centre_commercial_palais_dor :{
        type: Sequelize.REAL
       }, 
       centre_commercial_ritaj :{
        type: Sequelize.REAL
       }, 
       centre_commercial_khaouaja :{
        type: Sequelize.REAL
       }, 
       centre_commercial_el_anik :{
        type: Sequelize.REAL
       }, 
       centre_commercial_liper_city :{
        type: Sequelize.REAL
       },
       centre_commercial_ardis :{
        type: Sequelize.REAL
       },
       centre_commercial_kiteal :{
        type: Sequelize.REAL
       },
       centre_commenrcial_bayazit_market :{
        type: Sequelize.REAL
       },
       jardin_akid_lotfi :{
        type: Sequelize.REAL
       },
       espace_vert_entree_canastel :{
        type: Sequelize.REAL
       },
       jardin_publique_ain_turk :{
        type: Sequelize.REAL
       },
       jardin_el_othmania :{
        type: Sequelize.REAL
       },
       espace_vert_place_darme :{
        type: Sequelize.REAL
       },
       jardin_les_palmiers :{
        type: Sequelize.REAL
       },
       jardin_grand_terre :{
        type: Sequelize.REAL
       },
       jardin_yaghmorasen :{
        type: Sequelize.REAL
       },
       jardin_petit_bois_castors :{
        type: Sequelize.REAL
       },
       jardin_la_roserie :{
        type: Sequelize.REAL
       },
       jardin_hlm :{
        type: Sequelize.REAL
       },
       centre_culturel_franþais :{
        type: Sequelize.REAL
       },
       palais_de_la_culture :{
        type: Sequelize.REAL
       },
       centre_de_culture_pierre_claverie :{
        type: Sequelize.REAL
       },
       centre_de_culture_emir_abdelkader :{
        type: Sequelize.REAL
       }, 
       centre_de_culture_ibn_mahrez :{
        type: Sequelize.REAL
       }, 
       centre_de_culture_ibntachefine :{
        type: Sequelize.REAL
       }, 
       bibliotheque_cathedrale :{
        type: Sequelize.REAL
       },
       bibliotheque_es_seddikia :{
        type: Sequelize.REAL
       },
       bibliotheque_le_petit_lecteur :{
        type: Sequelize.REAL
       },
       theatre_de_verdure :{
        type: Sequelize.REAL
       },
       theatre_regional :{
        type: Sequelize.REAL
       },
       musee_dart_moderne :{
        type: Sequelize.REAL
       },
       musee_ahmed_zabana :{
        type: Sequelize.REAL
       },
       musee_el_moujahid :{
        type: Sequelize.REAL
       },
       id_user:{
        type: Sequelize.INTEGER,
        primaryKey : true,
       }                                                                          
    },
    {
        timestamps: false,
        freezeTableName: true
    })