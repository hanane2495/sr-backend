let pg = require('pg');
let SGD = require('./SGD');
let numeric = require('numeric');

let pool = new pg.Pool({
    user: 'postgres', 
    database : 'lieux_interet',
    password : 'root',
    host : 'localhost',
    port : 5432,
    max : 10,
    idleTimeoutMillis : 30000
});

pool.connect((err, db, done)=>{
    if(err){
        return console.log(err);
    }
    else{
        db.query("SELECT * FROM matrice_evaluation", (err, table)=>{
            if(err){
                console.log(err)
            }
            else{
                //lecture de la matrice d'evaluation (matrice A)
                var matrice_A = [];  
                 var i=0, j=0 ;
                table.rows.forEach(myFunction);
                  function myFunction(item, index) {
                      matrice_A[i]=[];
                     for (var key in item) {
                         if(typeof item[key] === 'number' && item[key]<=1 ){
                          var x = parseFloat(item[key]);
                          matrice_A[i][j]= x;
                         }
                         j++; 
                        }
                     j=0;
                     i++;   
                    }
            }//console.table(matrice_A);

            //creation d'une copie de A (matrice B) 
            var matrice_B = matrice_A.slice(0);
            //console.log(matrice_B);

            //selection de 30 lieux de chaque utilisateur aleatoirement 
            function randomNoRepeats(array) { //fonction qui choisis 30% des valeurs non-nulle d'une facon aleatoire
                    var copy = array.slice(0);
                    return function() {
                      if (copy.length < 1) { copy = array.slice(0); }
                      var index = Math.floor(Math.random() * copy.length);
                      var item = copy[index];
                      copy.splice(index, 1);
                      return item;
                    };
                  }


                  function User(u){
                    var utilisateur=[];
                   for(var l=4;l<104;l++){
                         utilisateur.push({
                             user:u,
                             lieu:l,
                             val:matrice_A[u][l]
                            });   
                    }
                    return utilisateur;
                  }
                  
                  var matriceTest = []; 
                  for(var u=0;u<30;u++){
                    var aleatoireSansDoublant = randomNoRepeats(User(u));
                    var listTest = [];
                    for(var r=0;r<30;r++){
                      listTest.push(aleatoireSansDoublant()); 
                    }
                    listTest.sort((a, b) => (a.val < b.val)? 1 : -1)
                    matriceTest[u]=listTest;
                  }
                  
                  //console.log(matriceTest);
                  
                  //remplacer les 30 lieu par des zero
                  
                  var u1, l1;
                    for(var i=0;i<matriceTest.length;i++){
                      for(var j=0;j<30;j++){
                          u1 = matriceTest[i][j].user;
                          l1 = matriceTest[i][j].lieu;
                          matrice_B[u1].splice(l1, 1, 0);
                      }
                    }
            // prediction
            var matrice_B_prediction = SGD(matrice_B, 20, 5000, 0.0005, 0.05);
            var matriceTest_prediction=[]
            for(var i=0;i<matriceTest.length;i++){
              var listTest_prediction=[]
              for(var j=0;j<30;j++){
                  u1 = matriceTest[i][j].user;
                  l1 = matriceTest[i][j].lieu;
                  var val = matrice_B_prediction[u1][l1];
                  listTest_prediction.push({
                    user : u1,
                    lieu : l1,
                    val : val
                  });
              }
              listTest_prediction.sort((a, b) => (a.val < b.val)? 1 : -1)
              matriceTest_prediction[i]=listTest_prediction;
            }
           //console.log(matriceTest_prediction); 

           //calcul precision 
           var precision_tous_utilisateurs = [];
           var intersection=0;
           for(var utilisateur=0; utilisateur<matriceTest.length;utilisateur++){
            var precision_utilisateur = [];
             for(var topk=0;topk<5;topk++){
                for(var k=0;k<=topk;k++){
                  for(var s=0;s<topk+2;s++){
                    if(matriceTest[utilisateur][k].lieu==matriceTest_prediction[utilisateur][s].lieu){
                      intersection++;
                      
                      //console.log("lieu : "+matriceTest[utilisateur][k].lieu+" lieu_predit : "+matriceTest_prediction[utilisateur][s].lieu)
                      //console.log("user : "+matriceTest[utilisateur][k].user+" user_predit : "+matriceTest_prediction[utilisateur][s].user)
                      //console.log("intersection : "+intersection+" topk :"+topk);
                      break;
                     }
                  }
                  
                }
                //precision pour chaque utilisateur
                var precision = intersection/k;
                precision_utilisateur.push({
                  user: utilisateur,
                  topk: topk+1,
                  intersection:intersection,
                  precision:precision
                });
                intersection=0;
             }
             precision_tous_utilisateurs[utilisateur]=precision_utilisateur;
           }
           //console.log(precision_tous_utilisateurs);

           //total precision par topk
           var precision_total = [];
           var total_precision = 0;
           for(var top=0;top<5;top++){
             for(var u=0;u<30;u++){
              total_precision = total_precision + precision_tous_utilisateurs[u][top].precision;
             }
             precision_total.push({
               topk: top+1,
               precision : total_precision/30
             });
             total_precision=0;
           }
           console.log(precision_total);
        })
    }
     
})
