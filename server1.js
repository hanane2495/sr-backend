let express = require('express');
let bodyparser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
let SGD = require('./nmf');
let numeric = require('numeric');
const PORT = 3000;

let pool = new pg.Pool({
    user: 'postgres', 
    database : 'recommandation_lieu',
    password : 'root',
    host : 'localhost',
    port : 5432,
    max : 10,
    idleTimeoutMillis : 30000
});

pool.connect((err, db, done) =>{
    if(err){
        return console.log(err);
    }
    else{
        db.query("SELECT * from matrice_evaluation", (err, table) => {
            if(err){
                return console.log(err)
            }
            else{
                //stocker la table.json "matrice_evaluation" dans un array[][]
                 var matrice = [];
                 var i=0, j=0 ;
                table.rows.forEach(myFunction);
                  function myFunction(item, index) {
                      matrice[i]=[];
                     for (var key in item) {
                          var x = parseInt(item[key]);
                          matrice[i][j]= x ;
                          j++;
                        }
                     j=0;
                     i++;   
                    }

                    //console.table(matrice);

                //traitement du K
                /*
                var k = function(){
                    if(table.rows.length >= 25){
                          return 20;
                    }else if(table.rows.length < 25 && table.rows.length >= 10 ){
                          return table.rows.length - 7;
                    }else return Math.trunc(table.rows.length/2);
                }*/


                //factorisation de la matrice (appel fonction nmf)_______________________________________
                var matrice_temp = SGD(matrice, 12, 5000, 0.0002, 0.02)
                for(var i =0; i<100;i++){
                    //console.log('nouvelle matrice :'+matrice_temp[0][i]+"  matrice initiale : "+matrice[0][i]);
                }
                
                //fin____________________________________________________________________________________
                

                //extraction des lieux de la BDD_________________________________________________________
                var user = 13;
                var indices = [];
                for(var lieu=0;lieu<100;lieu++){
                       if(matrice_temp[user][lieu]>3){
                           //console.log(matrice_temp[user][lieu]);
                           indices.push(lieu);
                       }
                }
                console.log(indices);
                //console.log(matrice_temp.lenght);
                //fin____________________________________________________________________________________             
            }
        })
    }
})

let app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extends: true }));

app.use(morgan('dev'));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.listen(PORT, () => console.log("listen on port : " +PORT));