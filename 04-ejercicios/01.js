function cualEsMayor(a, b) {
    if (a > b){
        return 'El número mayor es: ' + a;
    }else {
        return 'El número mayor es: ' + b;
    }
}

let mayor = cualEsMayor(5, 10);

console.log(mayor);


// Other way to solve this problem is the following:

/*

return (a > b) ? a : b;
 */