let calificacion = prompt("ingrese su calificacion por favor");

if(calificacion >= 1 && calificacion <= 10){
if (calificacion < 7) {
    alert("HAS REPROBADO");
}
else if (calificacion => 7) {
    alert("HAS APROBADO");
}
}
else {
    alert("DATO INCORRECTO. INGRESAR UN VALOR ENTRE 1 Y 10.");
}
