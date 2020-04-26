"use strict";

//  implementation Javascript d'un algorithme de Non-negative Matrix Factorisation 
//  pris du GitHub sur le lien suivant ==> https://github.com/aneesha/nmf.js/blob/master/nmf.js

var nmf = (typeof exports === "undefined")?(function nmf() {}):(exports);
if(typeof global !== "undefined") { global.nmf = nmf; }

nmf.version = "0.8";
nmf.epsilon = 0.0001;

nmf.mu = function mu(matrice, k, maxiterations, tolerance)
{
  // Implementation de l'algorithme de Lee et Seungs (Multiplicative Update Algorithm)
  var  matrice_dim;
  var m,n,i;
       
  matrice_dim = numeric.dim(matrice);
  m = matrice_dim[0];
  n = matrice_dim[1];
  

  var W =[], H = [];
  W = numeric.random([m,k]); // initialisation de W aleatoirement
  H = numeric.random([k,n]); // initialisation de H aleatoirement
/*
  var W =[];
  for(var j=0;j<m;j++){
    W[j]=[];
    for(var s=0;s<k;s++){
         W[j][s]= Math.random() * 6 | 1;  
    }
   
  }
  var H = [];
  for(var j=0;j<k;j++){
    H[j]=[];
    for(var s=0;s<n;s++){
         H[j][s]= Math.random() * 6 | 1;
    }
  }*/
    
  for (i=0; i<maxiterations; i++)
  {
    //H = H .* (W'A) ./ (W'WH + epsilon);
    H = numeric.div(numeric.mul(H,(numeric.dot(numeric.transpose(W),matrice))),(numeric.add(numeric.dot(numeric.dot(numeric.transpose(W),W),H),nmf.epsilon)));
    //W = W .* (AH' ) ./ (WHH' + epsilon);
    W = numeric.div(numeric.mul(W,numeric.dot(matrice,numeric.transpose(H))),(numeric.add(numeric.dot(numeric.dot(W,H),numeric.transpose(H)),nmf.epsilon)));
  
    var matrice_reconstruite = numeric.dot(W,H);
    
    if (nmf.calculate_reconstructionError(matrice,matrice_reconstruite) <= tolerance)
    {
      break;
    }
  }
  
  return matrice_reconstruite;
}

nmf.calculate_reconstructionError = function calculate_reconstructionError(matrice, matrice_reconstruite)
{
  return numeric.norm2(numeric.sub(matrice,matrice_reconstruite));
}