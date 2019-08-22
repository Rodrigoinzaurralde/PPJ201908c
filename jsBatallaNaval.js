var Estados= {
    Vacio: 0,
    Agua: 1,
    Barco: 2,
    Tocado: 3,
};

var cant_barcos;
var coordenadas;
var letraAtaque;
var numeroAtaque;
var coordenadasSep;

var indiceFilas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var indiceColumnas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var tablero = [
    []
];

function mainNaval() {
    cant_barcos = iniciarTableroAlAzar(tablero, 10, 10);
    imprimirTablero(tablero, indiceFilas, indiceColumnas, true);
}

var barcosHundidos = 0

function atacarCasillero() {
    if (cant_barcos > barcosHundidos) {
        coordenadas = prompt("ingrese coordenadas");
        coordenadasSep = coordenadas.split(",");
        letraAtaque = coordenadasSep[0];
        numeroAtaque = coordenadasSep[1];
        var letraFinal = indiceFilas.indexOf(letraAtaque);
        var numeroFinal = indiceColumnas.indexOf(numeroAtaque);
    }
}

function chequear() {
    if (letraFinal && numeroFinal == Estados.Barco) {
        barcosHundidos++;
        tablero[fila][columna] = Estados.Tocado
        alert('Barco tocado')
    } else if (letraFinal && numeroFinal == Estados.Tocado) {
        alert('Barco ya había sido tocado')
    } else {
        letraFinal && numeroFinal == Estados.Agua
        alert('Agua')
    }
}

function imprimirTablero(tablero, indiceFilas, indiceColumnas, verBarcos) {
    imprimir("*************************************");
    var linea = "   ";
    //Imprimo los índices de las columnas
    for (var i_columnas = 0; i_columnas < indiceColumnas.length; i_columnas++) {
        linea += " " + indiceColumnas[i_columnas] + " ";
    }

    imprimir(linea);

    //Imprimo todas las filas
    for (var i_filas = 0; i_filas < tablero.length; i_filas++) {
        var fila = indiceFilas[i_filas] + "  ";
        //Para cada fila imprimo todas las columnas
        for (var i_columnas = 0; i_columnas < tablero[i_filas].length; i_columnas++) {
            fila += TraducirEstado(tablero[i_filas][i_columnas], verBarcos);
        }
        imprimir(fila);
    }
    imprimir("*************************************");
}

function TraducirEstado(estado, verBarcos) {
    switch (estado) {
        case Estados.Vacio:
            return " - ";
        case Estados.Agua:
            return " o ";
        case Estados.Barco:
            return verBarcos ? " B " : " - ";
        case Estados.Tocado:
            return " x ";
        default:
            return "   ";
    }
}

function iniciarTableroAlAzar(tablero, filas, columnas) {
    //Primero pongo todas las casillas en vacio
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            if (!tablero[i]) {
                tablero[i] = [];
            }
            if (!tablero[i][j]) {
                tablero[i][j] = Estados.Vacio;
            }
        }
    }
    //Los barcos que tengo que poner
    var barcos = [2, 3, 4, 4, 5];

    //Para cada barco le buscó un lugar
    for (var i_barco = 0; i_barco < barcos.length; i_barco++) {
        //Indica si la posición que encontré es válida
        var valido = false;

        while (!valido) {
            //Encuentro fila y columna al azar
            var fila = Math.floor(Math.random() * tablero.length);
            var columna = Math.floor(Math.random() * tablero.length);
            //El sentido vertical u horizontal es al azar
            var sentido = Math.floor(Math.random() * 2); // Vertical,Horizontal
            var posible = true;
            //Si es horizontal
            if (sentido == 0 && fila + barcos[i_barco] <= tablero.length) {
                //Busco si "piso" a otro barco
                for (var i = fila; i < fila + barcos[i_barco]; i++) {
                    if (tablero[i][columna] != Estados.Vacio) {
                        posible = false;
                    }
                }
                if (posible) {
                    //Si es posible lo asigno
                    for (var i = fila; i < fila + barcos[i_barco]; i++) {
                        tablero[i][columna] = Estados.Barco;
                    }
                    valido = true;
                }
            } else if (sentido == 1 && columna + barcos[i_barco] <= tablero.length) {
                //Busco si "piso" a otro barco
                for (var i = columna; i < columna + barcos[i_barco]; i++) {
                    if (tablero[fila][i] != Estados.Vacio) {
                        posible = false;
                    }
                }
                if (posible) {
                    //Si es posible lo asigno
                    for (var i = columna; i < columna + barcos[i_barco]; i++) {
                        tablero[fila][i] = Estados.Barco;
                    }
                    valido = true;
                }
            }
        }
    }
    var cant_casilleros_barcos = 0;
    for (var i = 0; i < barcos.length; i++) {
        cant_casilleros_barcos += barcos[i];
    }
    return cant_casilleros_barcos;
}


function imprimir(texto) {
    document.getElementById("main").innerHTML += texto.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;') + '<br>';
}

function borrarTablero() {
    document.getElementById("main").innerHTML = "";
}