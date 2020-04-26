let pg = require('pg');
let SGD = require('./SGD');
let numeric = require('numeric');
let nmf = require('./nmf');

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

                //fin____________________________________________________________________________________

                //evaluation du systeme__________________________________________________________________ 
                
                //extraction des valeurs non-nulles
                /*
                var ValNonNulle=[];
                for(var u=0;u<17;u++){
                   for(var l=0;l<100;l++){
                      if(matrice[u][l]>=1){
                         ValNonNulle.push({
                             user:u,
                             lieu:l,
                             val:matrice[u][l]
                            });
                        }
                    } 
                }*/

                //extraction des 30% des valeurs non-nulles aleatoirement
                /*
                function randomNoRepeats(array) { //fonction qui choisis 30% des valeurs non-nulle d'une facon aleatoire
                    var copy = array.slice(0);
                    return function() {
                      if (copy.length < 1) { copy = array.slice(0); }
                      var index = Math.floor(Math.random() * copy.length);
                      var item = copy[index];
                      copy.splice(index, 1);
                      return item;
                    };
                  }*/

                //creation de LGT
                 var LGT=[
                    {user:7, lieu:66, val:5},
                    {user:11, lieu:35, val:1},
                    {user:15, lieu:67, val:2},
                    {user:10, lieu:34, val:2},
                    {user:9, lieu:65, val:5},
                    {user:7, lieu:64, val:3},
                    {user:5, lieu:42, val:3},
                    {user:11, lieu:75, val:3},
                    {user:14, lieu:0, val:5},
                    {user:13, lieu:52, val:3},
                    {user:7, lieu:1, val:5},
                    {user:14, lieu:8, val:3},
                    {user:1, lieu:75, val:3},
                    {user:11, lieu:29, val:1},
                    {user:0, lieu:82, val:2},
                    {user:10, lieu:2, val:2},
                    {user:14, lieu:95, val:2},
                    {user:3, lieu:18, val:1},
                    {user:4, lieu:20, val:1},
                    {user:12, lieu:46, val:4},
                    {user:7, lieu:58, val:3},
                    {user:13, lieu:75, val:5},
                    {user:16, lieu:44, val:4},
                    {user:5, lieu:98, val:2},
                    {user:13, lieu:65, val:2},
                    {user:3, lieu:29, val:3},
                    {user:12, lieu:44, val:5},
                    {user:15, lieu:14, val:1},
                    {user:7, lieu:79, val:1},
                    {user:3, lieu:42, val:2},
                    {user:11, lieu:76, val:3},
                    {user:15, lieu:72, val:2},
                    {user:0, lieu:65, val:2},
                    {user:15, lieu:66, val:4},
                    {user:1, lieu:2, val:1},
                    {user:11, lieu:79, val:4},
                    {user:7, lieu:61, val:3},
                    {user:13, lieu:50, val:5},
                    {user:3, lieu:71, val:2},
                    {user:1, lieu:46, val:2},
                    {user:12, lieu:37, val:4},
                    {user:9, lieu:69, val:5},
                    {user:9, lieu:38, val:2},
                    {user:7, lieu:13, val:2},
                    {user:15, lieu:45, val:3},
                    {user:9, lieu:39, val:3},
                    {user:6, lieu:76, val:3},
                    {user:10, lieu:94, val:3},
                    {user:5, lieu:80, val:1},
                    {user:4, lieu:1, val:2},
                    {user:11, lieu:57, val:3},
                    {user:11, lieu:52, val:3},
                    {user:15, lieu:89, val:1},
                    {user:15, lieu:73, val:2},
                    {user:12, lieu:68, val:5},
                    {user:12, lieu:10, val:3},
                    {user:13, lieu:61, val:2},
                    {user:2, lieu:65, val:3},
                    {user:10, lieu:65, val:3},
                    {user:14, lieu:31, val:3},
                    {user:11, lieu:74, val:2},
                    {user:12, lieu:40, val:4},
                    {user:11, lieu:64, val:2},
                    {user:9, lieu:59, val:3},
                    {user:16, lieu:5, val:3},
                    {user:12, lieu:70, val:4},
                    {user:9, lieu:43, val:2},
                    {user:0, lieu:50, val:4},
                    {user:12, lieu:64, val:3},
                    {user:10, lieu:60, val:3},
                    {user:8, lieu:68, val:5},
                    {user:12, lieu:77, val:3},
                    {user:12, lieu:2, val:3},
                    {user:11, lieu:62, val:2},
                    {user:7, lieu:44, val:5},
                    {user:5, lieu:72, val:5},
                    {user:10, lieu:4, val:4},
                    {user:4, lieu:82, val:1},
                    {user:14, lieu:92, val:3},
                    {user:8, lieu:0, val:5},
                    {user:3, lieu:99, val:3},
                    {user:6, lieu:79, val:4},
                    {user:0, lieu:10, val:2},
                    {user:11, lieu:96, val:5},
                    {user:9, lieu:73, val:4},
                    {user:1, lieu:0, val:2},
                    {user:3, lieu:61, val:2},
                    {user:10, lieu:62, val:3},
                    {user:8, lieu:98, val:5},
                    {user:15, lieu:44, val:1},
                    {user:14, lieu:52, val:4},
                    {user:12, lieu:95, val:5},
                    {user:7, lieu:47, val:5},
                    {user:5, lieu:66, val:5},
                    {user:15, lieu:69, val:2},
                    {user:10, lieu:72, val:4},
                    {user:16, lieu:75, val:4},
                    {user:10, lieu:44, val:2},
                    {user:7, lieu:77, val:4},
                    {user:10, lieu:70, val:3},
                    {user:14, lieu:96, val:4},
                    {user:9, lieu:80, val:3},
                    {user:9, lieu:77, val:5},
                    {user:3, lieu:8, val:2},
                    {user:11, lieu:65, val:3},
                    {user:13, lieu:78, val:5},
                    {user:12, lieu:78, val:3},
                    {user:7, lieu:70, val:3},
                    {user:1, lieu:78, val:1},
                    {user:9, lieu:67, val:5},
                    {user:11, lieu:36, val:1},
                    {user:12, lieu:5, val:4},
                    {user:9, lieu:52, val:5},
                    {user:0, lieu:76, val:4},
                    {user:12, lieu:58, val:4},
                    {user:15, lieu:49, val:3},
                    {user:7, lieu:3, val:5},
                    {user:14, lieu:53, val:3},
                    {user:12, lieu:71, val:5},
                    {user:12, lieu:0, val:5},
                    {user:12, lieu:85, val:4},
                    {user:14, lieu:87, val:2},
                    {user:3, lieu:89, val:2},
                    {user:14, lieu:14, val:1},
                    {user:11, lieu:50, val:3},
                    {user:11, lieu:34, val:1},
                    {user:14, lieu:51, val:1},
                    {user:5, lieu:62, val:1},
                    {user:4, lieu:72, val:3},
                    {user:14, lieu:30, val:3},
                    {user:10, lieu:80, val:3},
                    {user:12, lieu:81, val:4},
                    {user:3, lieu:46, val:2},
                    {user:12, lieu:56, val:3},
                    {user:12, lieu:34, val:4},
                    {user:9, lieu:28, val:1},
                    {user:8, lieu:79, val:3},
                    {user:1, lieu:66, val:2},
                    {user:3, lieu:0, val:4},
                    {user:0, lieu:1, val:3},
                    {user:5, lieu:79, val:4},
                    {user:3, lieu:73, val:2},
                    {user:12, lieu:99, val:4},
                    {user:15, lieu:94, val:1},
                    {user:3, lieu:50, val:1},
                    {user:6, lieu:49, val:3},
                    {user:9, lieu:96, val:5},
                    {user:14, lieu:55, val:2},
                    {user:3, lieu:22, val:3},
                    {user:1, lieu:76, val:3},
                    {user:3, lieu:79, val:1},
                    {user:13, lieu:99, val:5},
                    {user:14, lieu:66, val:2},
                    {user:14, lieu:99, val:2},
                    {user:15, lieu:3, val:3},
                    {user:14, lieu:80, val:3},
                    {user:9, lieu:85, val:4},
                    {user:4, lieu:42, val:5},
                    {user:13, lieu:46, val:5},
                    {user:4, lieu:92, val:5},
                    {user:4, lieu:98, val:3},
                    {user:9, lieu:58, val:3},
                    {user:14, lieu:72, val:4},
                    {user:14, lieu:54, val:3},
                    {user:16, lieu:49, val:3},
                    {user:9, lieu:70, val:1},
                    {user:10, lieu:29, val:3},
                    {user:4, lieu:22, val:3},
                    {user:15, lieu:76, val:3},
                    {user:4, lieu:65, val:4},
                    {user:12, lieu:51, val:3},
                    {user:5, lieu:96, val:1},
                    {user:13, lieu:44, val:5},
                    {user:12, lieu:42, val:4},
                    {user:3, lieu:67, val:2},
                    {user:12, lieu:57, val:4},
                    {user:10, lieu:32, val:2},
                    {user:15, lieu:17, val:1},
                    {user:15, lieu:86, val:1},
                    {user:7, lieu:54, val:1},
                    {user:9, lieu:44, val:2},
                    {user:3, lieu:37, val:2},
                    {user:1, lieu:65, val:3},
                    {user:16, lieu:0, val:4},
                    {user:14, lieu:10, val:3},
                    {user:12, lieu:86, val:5},
                    {user:16, lieu:67, val:4},
                    {user:13, lieu:92, val:3},
                    {user:15, lieu:93, val:1},
                    {user:14, lieu:57, val:2},
                    {user:11, lieu:91, val:2}
                 ];
                 /*
                 var aleatoireSansDoublant = randomNoRepeats(ValNonNulle);
                  for(var r=0;r<191;r++){
                    LGT.push(aleatoireSansDoublant());
                    console.log('{user:'+LGT[r].user+', lieu:'+LGT[r].lieu+', val:'+LGT[r].val+'},');
                    }*/

                    //creation de R1
                    var R1 = matrice.slice(0); //copier la matrice dans R1

                    //remplacer par zero les valeurs aleatoire
                    var u1, l1;
                    for(var element=0;element<LGT.length;element++){
                          //console.log(LGT[element].user, LGT[element].lieu);
                          u1 = LGT[element].user;
                          l1 = LGT[element].lieu;
                          R1[u1].splice(l1, 1, 0);
                              
                        }

                    //creation de R1' 
                    var R1_prime = nmf.mu(R1, 16, 5000, 0.02);
                    //console.log(R1_prime);

                        //calcul RMSE
                        var u1_prime, l1_prime;
                        var somme = 0;
                        for(var element=0;element<LGT.length;element++){
                            //console.log(LGT[element].user, LGT[element].lieu);
                            u1_prime = LGT[element].user;
                            l1_prime = LGT[element].lieu;
                            var e = LGT[element].val-R1_prime[u1_prime][l1_prime]
                            var carre = Math.pow(e,2);
                            somme = somme + carre;
                          }
                          var RMSE=Math.sqrt(somme/191);
                          //console.log('e = ',e);
                          //console.log('carre = ',carre);
                          //console.log('somme = ', somme)
                          console.log('RMSE = ', RMSE);
                    

                        
                //fin_____________________________________________________________________________________
             
            }
        })
    }
})
