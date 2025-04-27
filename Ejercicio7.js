const numeros= [1,4,5,6,7,9];

const mayores = numeros.filter(function (n){
    if(n > 5){
        return n;
    }
});

console.log("Los numeros mayores a 5 son: ", mayores);