const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {

    console.log("\n--- MENU PRINCIPAL ---");
    console.log("1. Caja");
    console.log("2. Clientes");
    console.log("3. Cocina");
    console.log("4. Salir");

    rl.question("Elige una opcion: ", function(opcion) {

        if(opcion == "1") {

            require("./caja.js");

        } 
        else if(opcion == "2") {

            require("./clientes.js");

        } 
        else if(opcion == "3") {

            require("./cocina.js");

        } 
        else if(opcion == "4") {

            console.log("Adios");
            rl.close();

        } 
        else {

            console.log("Opcion no valida");
            menu();

        }

    });

}

menu();