let i = 0;

while (i < 6){

    i++;
    if (i == 2){
        continue; // Volver al principio del ciclo
    }

    if (i == 4){
        break; // Salir del ciclo
    }
    console.log(i);
}