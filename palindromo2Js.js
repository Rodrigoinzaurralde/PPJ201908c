var palabra=prompt("Ingrese una palabra");
var palindromo=false;
//voy fijandome en las posiciones de palabra y las ultimas posiciones de palabra y si no son iguales a la var palindromo le pongo false
for(i=0;i<palabra.length;i++){
    if(palabra[i]!=palabra[palabra.length-i-1]){
        palindromo=false;
    }else{
        palindromo=true;
    }
}
//aca solo imprimo
if(palindromo){
    alert("Usted escribio un palindromo");
}else{
    alert("Usted no escribio un palindromo");
}