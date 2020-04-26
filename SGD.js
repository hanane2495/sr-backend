

    var numeric = require('numeric');

    const arrayColumn = (arr, n) => arr.map(x => x[n]);

    function factorisation_matricielle(matrice, k, max_iteration, alpha, beta){
        var  matrice_dim;
        var m,n,i=0,j=0,s;
       
        matrice_dim = numeric.dim(matrice);
        m = matrice_dim[0];
        n = matrice_dim[1];
  

        var W =[], H = [];
        W = numeric.random([m,k]); // initialisation de W aleatoirement
        H = numeric.random([k,n]); // initialisation de H aleatoirement

        for (var iteration=0; iteration<max_iteration; iteration++){
            // mise a jour de W et H
            for(i=0;i<m;i++){
                for(j=0;j<n;j++){
                    if(matrice[i][j]>0){
                      var eij=matrice[i][j]-numeric.dot(W[i],arrayColumn(H,j));
                      for(s=0;s<k;s++){
                        W[i][s] = W[i][s] + alpha * (2 * eij * H[s][j] - beta * W[i][s])
                        H[s][j] = H[s][j] + alpha * (2 * eij * W[i][s] - beta * H[s][j])
                      }
                    } 
                }
            }
            //reconstruction de la matrice
            var nouvelle_matrice = numeric.dot(W,H);

            //calcul de l'erreur 
            var e = 0;
            for (i=0;i<m;i++){
                for(j=0;j<n;j++){
                    if(matrice[i][j]>0){
                        e = e + Math.pow(matrice[i][j] - numeric.dot(W[i],arrayColumn(H,j)), 2)
                        for(s=0;s<k;s++){
                            e = e + (beta/2) * ( Math.pow(W[i][s],2) + Math.pow(H[s][j],2) )
                        }
                    }
                }
            }
         if (e < 0.001){break}
            
        }
        console.log("erreur", e)
        return nouvelle_matrice;
    }

    module.exports = factorisation_matricielle;