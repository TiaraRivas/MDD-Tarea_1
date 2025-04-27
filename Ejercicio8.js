const numeros = [1,2,3,4,5,6];

let sumaTotal = numeros.reduce(function(acumulador, numero){
    return acumulador + numero ;
},0)    

console.log("La suma total es: ", sumaTotal);